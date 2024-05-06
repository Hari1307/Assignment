import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storeToken, saveLoggedInUser } from "../services/AuthService";
import "../css/login.css";
type LoginFormData = {
    username: string;
    mobileNumber: string;
    password: string;
}

const initialData: LoginFormData = {
    username: "",
    mobileNumber: "",
    password: ""
}

export function Login() {
    const [loginData, setLoginData] = useState(initialData);
    const [input1, setInput1] = useState(true);
    const [input2, setInput2] = useState(false);

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    function updateFields(fields: Partial<LoginFormData>) {
        setLoginData((prev) => {
            return { ...prev, ...fields }
        })
    }

    function handleUsername() {
        setInput1(true);
        setInput2(false);
        setLoginData((prev) => {
            return { ...prev, hprId: "" }
        })
    }

    function handleMobileNumber() {
        setInput1(false);
        setInput2(true);
        setLoginData((prev) => {
            return { ...prev, mobileNumber: "" }
        })
    }

    function handlePassword() {
        setShowPassword(!showPassword);
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        axios.post("http://localhost:3000/assignment/login", loginData)
            .then(res => {
                console.log(res.data);
                storeToken(res.data.access_token);
                saveLoggedInUser(loginData.username, res.data.role);
                navigate("/UserDetails");
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="outline">
            <form onSubmit={onSubmit}>
                <h3>Login to National Healthcare Providers Registry</h3>
                <p className="logintext">Login via</p>
                <div className="btn-container">
                    <button className="functionalButton" onClick={handleUsername}>Healthcare Professional Id/username</button>
                    <button className="functionalButton" onClick={handleMobileNumber}>Mobile Number</button>
                </div>
                {input1 && <div className="textInput">
                    <label>Registered Healthcare Professional Id/username</label>
                    <input value={loginData.username} required
                        type="text"
                        onChange={e => updateFields({ username: e.target.value })} />
                </div>}

                {input2 && <div className="textInput">
                    <label>Registered Mobile Number</label>
                    <input value={loginData.mobileNumber} required
                        type="text"
                        maxLength={10}
                        onChange={e => updateFields({ mobileNumber: e.target.value })} />
                </div>}

                <div className="textInput">
                    <label>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        required
                        onChange={e => updateFields({ password: e.target.value })} />
                    <button type="button" onClick={handlePassword}>{showPassword ? "Hide" : "Show"}</button>
                </div>

                <div className="login">
                    <button type="submit">Login</button>
                </div>
                <div className="login">
                    Do not have an account? <Link to="/register">Register</Link>
                </div>

            </form>
        </div>
    )
}