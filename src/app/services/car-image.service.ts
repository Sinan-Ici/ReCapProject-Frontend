import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44339/uploads/images/"

  constructor(private httpClient:HttpClient) { }
  
  getCarImage(imagePath:string){
    return this.apiUrl+imagePath
  }

  

}
