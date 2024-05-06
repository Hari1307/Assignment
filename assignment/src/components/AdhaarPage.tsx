import "../css/login.css";
type AdhaarFormData = {
    adhaarNo: string
}

type AdhaarFormProp = AdhaarFormData & {
    updateFields: (fields: Partial<AdhaarFormData>) => void
}
export function AdhaarPage({ adhaarNo, updateFields }: AdhaarFormProp) {
    return (
        <div className="outline">
            <h3>Create your Healthcare Professional ID</h3>
            <div className="adharDiv">
                <label>Adhaar Number</label>
                <input autoFocus required value={adhaarNo}
                    type="text"
                    maxLength={12}
                    onChange={e => updateFields({ adhaarNo: e.target.value })} />
            </div>
        </div>
    );
}