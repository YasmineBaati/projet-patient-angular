import { Consultation } from "../consultation/consultation";
export class Patient {
    id?: number;
    firstName: string="";
    lastName: string="";
    email: string="";
    password: string="";
    confirm: string=""; // confirm password
    createdAt?: Date;
    updatedAt?: Date;

}