import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdhaarPage } from "./AdhaarPage";
import { OtpPage } from "./OtpPage";
import { RegistrationPage } from "./RegistrationPage";
import { RegistrationPage2 } from "./RegistrationPage2";
import { userMultistepForm } from "./useMultistepForm";
import "../css/login.css";
type FormData = {
    adhaarNo: string,
    otp: string,
    mobileNo: string,
    email: string,
    dob: string | number,
    district: string,
    sub_district: string;
    roles: string;
    category: string;
    sub_category: string;
    username: string;
    password: string;
    confirmPassword: string;
}
const INITIAL_DATA: FormData = {
    adhaarNo: "",
    otp: "",
    mobileNo: "",
    email: "",
    dob: "",
    district: "",
    sub_district: "",
    roles: "",
    category: "",
    sub_category: "",
    username: "",
    password: "",
    confirmPassword: ""
}

export function Register() {
    const [data, setData] = useState(INITIAL_DATA);

    const [compareOtp, setCompareOtp] = useState('');

    const navigate = useNavigate();

    const { step, next, back, isFirstStep, isLastStep, currentStepIndex } = userMultistepForm(
        [<AdhaarPage {...data} updateFields={updateFields} />,
        <OtpPage {...data} updateFields={updateFields} />,
        <RegistrationPage {...data} updateFields={updateFields} />,
        <RegistrationPage2 {...data} updateFields={updateFields} />]);

    useEffect(() => {
        if (!isFirstStep && currentStepIndex === 1) {
            console.log(compareOtp);
        }
    }, [isFirstStep, currentStepIndex]);

    function updateFields(fields: Partial<FormData>) {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }
    function generateOtp() {
        let generatedOtp = Math.floor(100000 + Math.random() * 900000);
        setCompareOtp(generatedOtp.toString());
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        console.log("submit button is clicked");
        if (isFirstStep) {
            generateOtp();
        }

        if (currentStepIndex === 1) {
            if (data.otp !== compareOtp) {
                alert("Entered Otp is invalid");
                return;
            }
        }

        if (isLastStep) {
            if (data.password !== data.confirmPassword) {
                alert("please enter the same password");
                return;
            }
            const { otp, confirmPassword, ...filteredData } = data;

            axios.post("http://localhost:3000/assignment", filteredData)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
            navigate("/login");
        }
        return next();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>{step}</div>
            <div>
                {currentStepIndex === 3 && <button type="button" style={{ backgroundColor: "white", padding: "10px", marginLeft: "45rem", border: "1px solid black", borderRadius: "5px", width: "100px", marginTop: "50px" }} className="backButton" onClick={back}>back</button>}
            </div>

            <div className="login" style={{ marginLeft: "370px" }}>
                <button type="submit">Submit</button>
            </div>
        </form >
    )
}