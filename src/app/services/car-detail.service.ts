import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl='https://localhost:44339/api/'

  constructor(private httpClient:HttpClient) { }


  getCarDetailId(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+'cars/getcardetailbycarid?id='+id
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+'cars/getcardetails' 
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)

  }
 
}
