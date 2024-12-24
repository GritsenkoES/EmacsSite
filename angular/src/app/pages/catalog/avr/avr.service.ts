import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvrService {

  constructor() { }
  getImagesUrl():Observable<string[]>{
    return of(avrImages)
  }
}
const avrImages:string[]=["img/avr1.jpg","img/avr_description_image2.png","img/avr_description_image3.png"]
