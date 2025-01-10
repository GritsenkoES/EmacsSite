import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpApi} from './HttpApi';

@Injectable({
  providedIn: 'root'
})
export class BackRequestService {
  inputDisabled:boolean=true
  api = new HttpApi()
  constructor(private http:HttpClient) { }

  //sendCallRequest(name:string,phone:string):Observable<any>{
    //http.get()
  //}
}
