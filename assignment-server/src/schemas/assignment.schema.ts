import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsDateString } from "class-validator";
import { Document } from "mongoose";

@Schema()
export class Assignment extends Document {
    @Prop({ unique: true, required: true })
    adhaarNo: string;

    @Prop({ unique: true, required: true })
    mobileNo: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    @IsDateString()
    dob: Date;

    @Prop({ required: true })
    district: string;

    @Prop({ required: true })
    sub_district: string;

    @Prop({ required: true })
    roles: string;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    sub_category: string;

    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    nationality: string;

    @Prop({ required: false })
    language: [string];

    @Prop({ required: false })
    council: string;

    @Prop({ required: false })
    registrationNumber: string;

    @Prop({ required: false })
    dateOfRegistration: string;

    @Prop({ required: false })
    permanentOrRenewable: string;

    @Prop({ required: false })
    dateOfRenewable: string;

    @Prop({ required: false })
    registrationCertificate: File | null;

    @Prop({ required: false })
    countryQualification: string;

    @Prop({ required: false })
    degreeName: string;

    @Prop({ required: false })
    country: string;

    @Prop({ required: false })
    state: string;
    @Prop({ required: false })
    college: string;
    @Prop({ required: false })
    university: string;
    @Prop({ required: false })
    monthOfExam: string;
    @Prop({ required: false })
    yearOfExam: string;
    @Prop({ required: false })
    uploadAttachment: File | null;
    @Prop({ required: false })
    working: boolean;
    @Prop({ required: false })
    natureOfWork: string;
    @Prop({ required: false })
    teleUrl: string;
    @Prop({ required: false })
    workStatus: string;

}

export const AssignmentSchema = SchemaFactory.createForClass(Assignment);