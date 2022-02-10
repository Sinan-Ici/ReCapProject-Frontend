import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponModel } from 'src/app/models/Car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
 apiUrl='https://localhost:44339/api/cars/getall';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponModel>{
    return this.httpClient
    .get<CarResponModel>(this.apiUrl)
  }
}
