import { useState } from "react";

type RegistrationPageData2 = {
    roles: string;
    category: string;
    sub_category: string;
    username: string;
    password: string;
    confirmPassword: string;
}
type RegistrationPageProp2 = RegistrationPageData2 & {
    updateFields: (fields: Partial<RegistrationPageData2>) => void
}
export function RegistrationPage2({ roles, category, sub_category, username, password, confirmPassword, updateFields }: RegistrationPageProp2) {
    const [showPassword, setShowPassword] = useState(false);
    function handlePassword() {
        setShowPassword(!showPassword);
    }
    return (
        <div className="outline">
            <h3>Registration Form</h3>
            <label style={{ marginLeft: "30px" }}>Roles</label>
            <div className="radiobtn">
                <label>
                    <input
                        type="radio"
                        value="I am a Healthcare Professional"
                        checked={roles === 'I am a Healthcare Professional'}
                        onChange={e => updateFields({ roles: e.target.value })}
                    />
                    I am a Healthcare Professional
                </label>
                <label>
                    <input
                        type="radio"
                        value="I am a Facility Manager/Administrator"
                        checked={roles === 'I am a Facility Manager/Administrator'}
                        onChange={e => updateFields({ roles: e.target.value })}
                    />
                    I am a Facility Manager/Administrator
                </label>
                <label>
                    <input
                        type="radio"
                        value="I am a Healthcare Professional & Facility Manager"
                        checked={roles === 'I am a Healthcare Professional & Facility Manager'}
                        onChange={e => updateFields({ roles: e.target.value })}
                    />
                    I am a Healthcare Professional & Facility Manager
                </label>
            </div>

            <div className="regDiv">
                <label>Category</label>
                <input required value={category} type="text"
                    onChange={e => updateFields({ category: e.target.value })} />
            </div>

            <div className="regDiv">
                <label>Sub Category</label>
                <input required value={sub_category} type="text"
                    onChange={e => updateFields({ sub_category: e.target.value })} />
            </div>

            <div className="regDiv">
                <label>Healthcare Professional Id / Username</label>
                <input required value={username} type="text"
                    onChange={e => updateFields({ username: e.target.value })} />
            </div>

            <div className="regDiv">
                <label>Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    required
                    onChange={e => updateFields({ password: e.target.value })} />
                <button type="button" onClick={handlePassword}>{showPassword ? "Hide" : "Show"}</button>
            </div>

            <div className="regDiv">
                <label>Confirm Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    required
                    onChange={e => updateFields({ confirmPassword: e.target.value })} />
                <button type="button" onClick={handlePassword}>{showPassword ? "Hide" : "Show"}</button>
            </div>
        </div>)
}