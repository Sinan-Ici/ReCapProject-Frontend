import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponModel } from 'src/app/models/Color/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl='https://localhost:44339/api/colors/getall';

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponModel>{
    return this.httpClient
    .get<ColorResponModel>(this.apiUrl)
  }
}
