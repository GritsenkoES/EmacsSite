import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpApi} from './HttpApi';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackRequestService {
  inputDisabled:boolean=true
  api = new HttpApi()
  constructor(private http:HttpClient) { }

  sendCallRequest(name:string|null,phone:string, comment:string|null):Observable<ResponseCallDto>{
    return this.http.post<ResponseCallDto>(this.api.getCallingApi(),{
      name:name,
      phone:phone,
      comment:comment
    })
  }
}

export interface ResponseCallDto{
  message:string
  httpStatus: number
}
