import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL="https://localhost:44338/api/"
constructor(private httpClient:HttpClient) { }

login(loginModel: LoginModel){
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiURL+"login",loginModel)
}
}
