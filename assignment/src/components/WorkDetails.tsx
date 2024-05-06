type WorkDetailsData = {
    working: boolean;
    natureOfWork: string;
    teleUrl: string;
    workStatus: string;
}

type WorkDetailsPorp = WorkDetailsData & {
    updateFields: (fields: Partial<WorkDetailsData>) => void
}
export function WorkDetails({ working, natureOfWork, teleUrl, workStatus, updateFields }: WorkDetailsPorp) {
    return (
        <div className="reg-outline">
            <div>
                <h1>Current Working Details</h1>
                <label> is this registration permanent or renewable</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            required
                            value="true"
                            checked={working === true}
                            onChange={() => updateFields({ working: true })}
                        />
                        true
                    </label>
                    <label>
                        <input
                            type="radio"
                            required
                            value="false"
                            checked={working === false}
                            onChange={() => updateFields({ working: false })}
                        />
                        false
                    </label>
                </div>

                <div className="regDiv">
                    <label>Nature of Work</label>
                    <input required type="text" value={natureOfWork} onChange={(e) => updateFields({ natureOfWork: e.target.value })} />
                </div>

                <div className="regDiv">
                    <label>Teleconsultation URL</label>
                    <input required type="text" value={teleUrl} onChange={(e) => updateFields({ teleUrl: e.target.value })} />
                </div>

                <label> is this registration permanent or renewable</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            required
                            value="Government"
                            checked={workStatus === "Government"}
                            onChange={(e) => updateFields({ workStatus: e.target.value })}
                        />
                        Government
                    </label>
                    <label>
                        <input
                            type="radio"
                            required
                            value="Private"
                            checked={workStatus === "Private"}
                            onChange={(e) => updateFields({ workStatus: e.target.value })}
                        />
                        Private
                    </label>

                    <label>
                        <input
                            type="radio"
                            required
                            value="Both"
                            checked={workStatus === "Both"}
                            onChange={(e) => updateFields({ workStatus: e.target.value })}
                        />
                        Both
                    </label>
                </div>
            </div>

        </div>
    )

}