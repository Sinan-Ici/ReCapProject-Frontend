import { ResponseModel } from "../responseModel";
import { Color } from "./color";

export interface ColorResponModel extends ResponseModel{
    data:Color[];
}