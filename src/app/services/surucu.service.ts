import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Surucu } from '../models/surucu';
import { SurucuDestek } from '../models/surucu-destek';
import { SurucuDetail } from '../models/surucuDetail';

@Injectable({
  providedIn: 'root'
})
export class SurucuService {
  apiURL="https://localhost:44338/api/"
constructor(private httpClient:HttpClient) { }

surucuDetails(): Observable<ListResponseModel<SurucuDetail>> {
  let newPath = this.apiURL + "suruculer/getsurucudetails"
return this.httpClient.get<ListResponseModel<SurucuDetail>>(newPath);
}

add(surucu:Surucu):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiURL +"suruculer/surucuadd",surucu)
}

surucuDestekDetails(): Observable<ListResponseModel<SurucuDestek>> {
  let newPath = this.apiURL + "suruculer/surucudestekgetall"
return this.httpClient.get<ListResponseModel<SurucuDestek>>(newPath);
}

surucuDestekAdd(surucu:SurucuDestek):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiURL +"suruculer/surucudestekadd",surucu)
}
}
