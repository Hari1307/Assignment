import "../css/login.css"
type otpFormData = {
    adhaarNo: string
    otp: string
}

type otpFormProp = otpFormData & {
    updateFields: (fields: Partial<otpFormData>) => void
}
export function OtpPage({ adhaarNo, otp, updateFields }: otpFormProp) {
    return (
        <div className="outline">
            <h3>Create your Healthcare Professional ID</h3>
            <div className="otpDiv">
                <label>Adhaar Number</label>
                <input disabled value={adhaarNo} type="text" />
            </div>

            <div className="otpDiv">
                <label>Please Enter the OTP</label>
                <input autoFocus type="text" maxLength={6}
                    value={otp}
                    onChange={e => { updateFields({ otp: e.target.value }) }} />
            </div>
        </div>
    )
}