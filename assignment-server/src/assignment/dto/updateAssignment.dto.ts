import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { isStringObject } from "util/types";

export class UpdateAssignmentDto {
    @IsNotEmpty()
    @IsString()
    nationality: string;

    @IsNotEmpty()
    language: string[];

    @IsNotEmpty()
    @IsString()
    council: string;

    @IsNotEmpty()
    @IsString()
    registrationNumber: string;

    @IsNotEmpty()
    @IsString()
    dateOfRegistration: string;

    @IsNotEmpty()
    @IsString()
    permanentOrRenewable: string;

    @IsNotEmpty()
    @IsString()
    dateOfRenewable: string;

    registrationCertificate: File | null;

    @IsNotEmpty()
    @IsString()
    countryQualification: string;

    @IsNotEmpty()
    @IsString()
    degreeName: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    college: string;

    @IsNotEmpty()
    @IsString()
    university: string;

    @IsNotEmpty()
    @IsString()
    monthOfExam: string;

    @IsNotEmpty()
    @IsString()
    yearOfExam: string;

    uploadAttachment: File | null;

    @IsNotEmpty()
    @IsBoolean()
    working: boolean;

    @IsNotEmpty()
    @IsString()
    natureOfWork: string;

    @IsNotEmpty()
    @IsString()
    teleUrl: string;

    @IsNotEmpty()
    @IsString()
    workStatus: string;
}