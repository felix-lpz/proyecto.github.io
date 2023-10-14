import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/request-login.models';
import {Observable} from "rxjs"
import {urlConstants} from "src/app/constants/constant.url"
import { ResponseLogin } from 'src/app/models/Response-loguin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}
  Login(request:RequestLogin):Observable<ResponseLogin>
  {
    return this.http.post<ResponseLogin>(urlConstants.auth,request);
  }
}
