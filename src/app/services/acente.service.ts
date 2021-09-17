import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acente } from '../models/acente';
import { AcenteDetail } from '../models/acenteDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AcenteService {
  apiURL="https://localhost:44338/api/"
constructor(private httpClient:HttpClient) { }

acenteDetails(): Observable<ListResponseModel<AcenteDetail>> {
  let newPath = this.apiURL + "admin/getacentedetails"
  return this.httpClient.get<ListResponseModel<AcenteDetail>>(newPath);
}
add(acente:Acente):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiURL +"admin/acenteadd",acente)
}
}
