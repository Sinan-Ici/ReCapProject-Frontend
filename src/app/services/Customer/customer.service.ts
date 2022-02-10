import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponModel } from 'src/app/models/Customer/customerResponeModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl='https://localhost:44339/api/customers/getall';

  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<CustomerResponModel>{
    return this.httpClient
    .get<CustomerResponModel>(this.apiUrl)
  }
}
