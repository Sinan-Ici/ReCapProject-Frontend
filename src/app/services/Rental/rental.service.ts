import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponModel } from 'src/app/models/Rental/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl='https://localhost:44339/api/rentals/getall';

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponModel>{
    return this.httpClient
    .get<RentalResponModel>(this.apiUrl)
  }
}
