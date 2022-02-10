import { ResponseModel } from "../responseModel";
import { Customer } from "./customer";

export interface CustomerResponModel extends ResponseModel{
    data:Customer[];
}