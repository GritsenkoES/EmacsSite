import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItpService {

  constructor() { }
  getImagesUrl():Observable<string[]>{
    return of(itpImages)
  }

}
const itpImages:string[]=['img/itp1.jpg','img/itp2.jpg','img/itp3.jpg'];
