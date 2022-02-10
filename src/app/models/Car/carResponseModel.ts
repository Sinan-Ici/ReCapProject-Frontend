import { ResponseModel } from "../responseModel";
import { Car } from "./car";

export interface CarResponModel extends ResponseModel{
    data:Car[];
}