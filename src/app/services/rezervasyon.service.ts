import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Rezervasyon } from '../models/rezervasyon';
import { RezervasyonDetail } from '../models/rezervasyonDetail';

@Injectable({
  providedIn: 'root'
})
export class RezervasyonService {
  apiURL="https://localhost:44338/api/"
constructor(private httpClient:HttpClient) { }

rezervasyonDetails(): Observable<ListResponseModel<RezervasyonDetail>> {
  let newPath = this.apiURL + "admin/getrezervasyondetails"
  return this.httpClient.get<ListResponseModel<RezervasyonDetail>>(newPath);
}
add(rezervasyon:Rezervasyon):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiURL +"admin/rezervasyonadd",rezervasyon)
}
rezervasyonTrue(): Observable<ListResponseModel<Rezervasyon>> {
  let newPath = this.apiURL + "admin/bystatustrue"
  return this.httpClient.get<ListResponseModel<Rezervasyon>>(newPath);
}

rezervasyonFalse(): Observable<ListResponseModel<Rezervasyon>> {
  let newPath = this.apiURL + "admin/bystatusfalse"
  return this.httpClient.get<ListResponseModel<Rezervasyon>>(newPath);
}

}

