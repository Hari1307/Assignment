import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/AuthService";
import { PersonalDetails } from "./PersonalDetails";
import { RegistrationAndQualificationDetails } from "./RegistrationAndQualificationDetails";
import { WorkDetails } from "./WorkDetails";
import { userMultistepForm } from "./useMultistepForm";

const accessRoles: { [key: string]: string[] } = {
    '/UserDetails': ["I am a Healthcare Professional"],
};

type FormData = {
    nationality: string;
    language: string[];
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
    working: boolean;
    natureOfWork: string;
    teleUrl: string;
    workStatus: string;
}
const INITIAL_DATA: FormData = {
    nationality: "",
    language: [],
    council: "",
    registrationNumber: "",
    dateOfRegistration: "",
    permanentOrRenewable: "",
    dateOfRenewable: "",
    registrationCertificate: null,
    countryQualification: "",
    degreeName: "",
    country: "",
    state: "",
    college: "",
    university: "",
    monthOfExam: "",
    yearOfExam: "",
    uploadAttachment: null,
    working: false,
    natureOfWork: "",
    teleUrl: "",
    workStatus: ""
}


export function Details() {
    const [data, setData] = useState(INITIAL_DATA);
    const navigate = useNavigate();
    const accessToken = getToken();
    const role = sessionStorage.getItem("role") ?? "";
    const [userData, setUserData] = useState({});



    const { step, next, back, isLastStep, currentStepIndex } = userMultistepForm(
        [
            <PersonalDetails {...data} updateFields={updateFields} />,
            <RegistrationAndQualificationDetails userData={userData} {...data}
                updateFields={updateFields} />,
            <WorkDetails {...data} updateFields={updateFields} />
        ]);


    function updateFields(fields: Partial<FormData>) {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }


    useEffect(() => {
        if (!accessToken) {
            navigate("/login");
        }

        const currentPage = location.pathname;
        const canAccessPage = accessRoles[currentPage]?.includes(role);

        if (!canAccessPage) {
            alert("access-denied");
            navigate("/error");
        }

        axios.get("http://localhost:3000/assignment", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(res => {
                setUserData(res.data.userDetails);
                console.log(userData);
            })
            .catch(err => console.log(err));
    }, [])


    function onSubmit(e: FormEvent) {
        e.preventDefault();

        // console.log(data);
        if (isLastStep) {
            // console.log(data);
            axios.patch("http://localhost:3000/assignment", data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((response) => {
                    console.log("Response:", response.data);
                    if (isLastStep) {
                        console.log("Form submitted successfully");
                    } else {
                        return next();
                    }
                })
                .catch((error) => {
                    console.error("Error uploading file:", error);
                    alert("Failed to upload file");
                });
        }
        return next();
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>User Details Form</h1>
            <div>{step}</div>
            {currentStepIndex === 1 || currentStepIndex === 2 && <button type="button" onClick={back}>back</button>}
            <button type="submit">Save & Next</button>
        </form>
    );
}