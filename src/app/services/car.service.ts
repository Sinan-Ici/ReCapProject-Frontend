import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 apiUrl='https://localhost:44339/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getall'
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getbybrand?brandId='+brandId  
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'cars/getbycolor?colorId='+colorId  
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }
 
}
