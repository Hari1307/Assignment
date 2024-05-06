import { IsNotEmpty, IsString } from "class-validator";

export class CreateAssignmentDto {
    @IsNotEmpty()
    @IsString()
    adhaarNo: string;

    @IsNotEmpty()
    @IsString()
    mobileNo: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    dob: string | number;

    @IsNotEmpty()
    @IsString()
    district: string;

    @IsNotEmpty()
    @IsString()
    sub_district: string;

    @IsNotEmpty()
    @IsString()
    roles: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    sub_category: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}