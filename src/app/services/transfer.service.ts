import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Transfer } from '../models/transfer';
import { TransferDetail } from '../models/transferDetail';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  apiURL="https://localhost:44338/api/"
constructor(private httpClient:HttpClient) { }

transferDetails(): Observable<ListResponseModel<TransferDetail>> {
  let newPath = this.apiURL + "admin/gettransferdetails"
return this.httpClient.get<ListResponseModel<TransferDetail>>(newPath);
}

add(transfer:Transfer):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiURL +"admin/transferadd",transfer)
}
}
