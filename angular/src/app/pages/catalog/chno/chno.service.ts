import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChnoService {

  constructor() { }
  getImagesUrl():Observable<string[]>{
    return of(chnoImages)
  }

}
const chnoImages:string[]=['img/schno1.jpg','img/schno2.jpg','img/schno3.jpg'];
