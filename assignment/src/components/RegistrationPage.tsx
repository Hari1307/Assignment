
type RegistrationPageData = {
    mobileNo: string;
    email: string;
    dob: string | number;
    district: string;
    sub_district: string;
}
type RegistrationPageProp = RegistrationPageData & {
    updateFields: (fields: Partial<RegistrationPageData>) => void
}
export function RegistrationPage({ mobileNo, email, dob, district, sub_district, updateFields }: RegistrationPageProp) {
    return (
        <div className="outline">
            <h3>Registration Form</h3>
            <div className="regDiv">
                <label>Mobile Number</label>
                <input autoFocus required value={mobileNo} type="text"
                    maxLength={10}
                    onChange={e => updateFields({ mobileNo: e.target.value })} />
            </div>

            <div className="regDiv">
                <label>Email</label>
                <input required value={email} type="email"
                    onChange={e => updateFields({ email: e.target.value })} />
            </div>

            <div className="regDiv">
                <label>Date of Birth</label>
                <input required value={dob} type="date"
                    onChange={e => updateFields({ dob: e.target.value })} />
            </div>
            <div className="regDiv">
                <label>District</label>
                <input required value={district} type="text"
                    onChange={e => updateFields({ district: e.target.value })} />
            </div>

            <div className="regDiv">
                <label>Sub_District</label>
                <input required value={sub_district} type="text"
                    onChange={e => updateFields({ sub_district: e.target.value })} />
            </div>
        </div>)
}