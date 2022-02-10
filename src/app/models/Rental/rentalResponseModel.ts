import { ResponseModel } from "../responseModel";
import { Rental } from "./rental";

export interface RentalResponModel extends ResponseModel{
    data:Rental[];
}