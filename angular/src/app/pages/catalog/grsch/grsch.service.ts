import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrschService {

  constructor() { }
  getImagesUrl():Observable<string[]>{
    return of(grschImages)
  }

}
const grschImages:string[]=['img/grsch1.jpg','img/grsch2.jpg','img/grsch3.jpg'];
