import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpApi} from './HttpApi';
import {AllOurServicesDto} from '../types/Dto';


@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor(private http: HttpClient, private api:HttpApi)  {
  }
  getOurServices():Observable<AllOurServicesDto>{
    return this.http.get<AllOurServicesDto>(this.api.getAllServiceApi())
  }
}
