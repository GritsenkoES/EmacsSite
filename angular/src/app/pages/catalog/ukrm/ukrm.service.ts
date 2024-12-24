import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UkrmService {

  constructor() { }
  getImagesUrl():Observable<string[]>{
    return of(ukrmImages)
  }

}
const ukrmImages:string[]=['img/ukrm1.jpg','img/ukrm2.jpg','img/ukrm3.jpg'];
