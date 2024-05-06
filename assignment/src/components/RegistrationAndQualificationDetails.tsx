import { useEffect } from "react";

type RegistrationAndQualificationDetailsData = {
    council: string;
    registrationNumber: string;
    dateOfRegistration: string;
    permanentOrRenewable: string;
    dateOfRenewable: string;
    registrationCertificate: File | null;
    countryQualification: string;
    degreeName: string;
    country: string;
    state: string;
    college: string;
    university: string;
    monthOfExam: string;
    yearOfExam: string;
    uploadAttachment: File | null;
}

type RegistrationAndQualificationDetailsProp = RegistrationAndQualificationDetailsData & {
    updateFields: (fields: Partial<RegistrationAndQualificationDetailsData>) => void
}

export function RegistrationAndQualificationDetails({ userData, council,
    registrationNumber, dateOfRegistration, permanentOrRenewable,
    dateOfRenewable, countryQualification, degreeName, country, state, college, university, monthOfExam, yearOfExam, updateFields }: RegistrationAndQualificationDetailsProp) {

    function handleRegistrationCertificate(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (files && files.length > 0) {
            updateFields({ registrationCertificate: files[0] })
        }
    }

    function handleUploadAttachment(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (files && files.length > 0) {
            updateFields({ uploadAttachment: files[0] })
        }
    }

    useEffect(() => {
        if (countryQualification === "India") {
            updateFields({ country: countryQualification })
        }
    }, [countryQualification]);
    // function updateCountry() {
    //     updateFields({ country: countryQualification });
    //     return true;
    // }
    // console.log(userData);

    return (
        <div className="reg-outline">
            <h3>Registration and Qualification Details</h3>
            <div>
                <h1>System of Medicine</h1>
                <label>Category</label>
                <input disabled value={userData.category} />
                <label>System of Medicine</label>
                <input disabled required value={userData.sub_category} />
            </div>
            <br />
            <div>
                <h1>Registration Details</h1>
                <div className="regDiv">
                    <label>Registration with Council</label>
                    <input value={council} type="text" required autoFocus
                        onChange={e => updateFields({ council: e.target.value })} />
                </div>
                <div className="regDiv">
                    <label>Registration Number</label>
                    <input value={registrationNumber} type="text" required
                        onChange={e => updateFields({ registrationNumber: e.target.value })} />
                </div>
                <div className="regDiv">
                    <label>Date of First Registration</label>
                    <input required value={dateOfRegistration} type="date"
                        onChange={e => updateFields({ dateOfRegistration: e.target.value })} />
                </div>
                <br />
                <label> is this registration permanent or renewable</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            required
                            value="Permanent"
                            checked={permanentOrRenewable === 'Permanent'}
                            onChange={e => updateFields({ permanentOrRenewable: e.target.value })}
                        />
                        Permanent
                    </label>
                    <label>
                        <input
                            type="radio"
                            required
                            value="Renewable"
                            checked={permanentOrRenewable === 'Renewable'}
                            onChange={e => updateFields({ permanentOrRenewable: e.target.value })}
                        />
                        Renewable
                    </label>
                </div>

                <div className="regDiv">
                    <label>Date of Renewable</label>
                    <input required value={dateOfRenewable} type="date"
                        onChange={e => updateFields({ dateOfRenewable: e.target.value })} />
                </div>
                <div className="regDiv">
                    <label>Registration Certificate Attachment</label>
                    <input type="file" onChange={handleRegistrationCertificate} />
                </div>
            </div>

            <div>
                <h1>Qualification Details</h1>
                <label> is this registration permanent or renewable</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            required
                            value="India"
                            checked={countryQualification === 'India'}
                            onChange={e => updateFields({ countryQualification: e.target.value })}
                        />
                        India
                    </label>
                    <label>
                        <input
                            type="radio"
                            required
                            value="Any Other"
                            checked={countryQualification === 'Any Other'}
                            onChange={e => updateFields({ countryQualification: e.target.value })}
                        />
                        Any Other
                    </label>
                </div>

                <div className="regDiv">
                    <label>Name of Degree or Diplamo</label>
                    <input required value={degreeName} type="text"
                        onChange={e => updateFields({ degreeName: e.target.value })} />
                </div>
                <div className="regDiv">
                    <label>Country</label>
                    {countryQualification === "India" ?
                        (<input disabled value={countryQualification} type="text" />)

                        : (<input required value={country} type="text"
                            onChange={e => updateFields({ country: e.target.value })} />)
                    }
                </div>


                <div className="regDiv">
                    <label>State</label>
                    <input required value={state} type="text"
                        onChange={e => updateFields({ state: e.target.value })} />
                </div>

                <div className="regDiv">
                    <label>College</label>
                    <input required value={college} type="text"
                        onChange={e => updateFields({ college: e.target.value })} />
                </div>

                <div className="regDiv">
                    <label>University</label>
                    <input required value={university} type="text"
                        onChange={e => updateFields({ university: e.target.value })} />
                </div>

                <div className="regDiv">
                    <label>Month of Exam</label>
                    <input required value={monthOfExam} type="text"
                        onChange={e => updateFields({ monthOfExam: e.target.value })} />
                </div>

                <div className="regDiv">
                    <label>Year of Exam</label>
                    <input required value={yearOfExam} type="text"
                        onChange={e => updateFields({ yearOfExam: e.target.value })} />
                </div>

                <div className="regDiv">
                    <label>Upload Attachment</label>
                    <input type="file" onChange={handleUploadAttachment} />
                </div>

            </div>
        </div>
    )
}