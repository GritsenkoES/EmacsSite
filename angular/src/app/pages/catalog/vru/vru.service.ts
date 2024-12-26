import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VruService {

  constructor() { }
  getImagesUrl():Observable<string[]>{
    return of(ukrmImages)
  }

}
const ukrmImages:string[]=['img/vru1.jpg','img/vru2.jpg','img/vru3.jpg'];
