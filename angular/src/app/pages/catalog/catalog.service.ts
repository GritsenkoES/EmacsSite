import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  urls:Map<string, CatalogItem>

  constructor() {
    this.urls = new Map<string, CatalogItem>();
    this.urls.set('avr',{imageUrls:avrImages,title:''})
    this.urls.set('chno',{imageUrls:chnoImages,title:''})
    this.urls.set('grsch',{imageUrls:grschImages,title:''})
    this.urls.set('itp',{imageUrls:itpImages,title:''})
    this.urls.set('ukrm',{imageUrls:ukrmImages,title:''})
    this.urls.set('vru',{imageUrls:vruImages,title:''})
    this.urls.set('schun',{imageUrls:schunImages,title:''})
  }



  getImagesUrls(path:string):Observable<CatalogItem>{
    const urls = this.urls.get(path)

    if(urls) return of(urls)
    return of({title:'',imageUrls:[]})
  }
}
const avrImages:string[]=["img/avr1.jpg","img/avr_description_image2.png","img/avr_description_image3.png"]
const chnoImages:string[]=['img/schno1.jpg','img/schno2.jpg','img/schno3.jpg'];
const grschImages:string[]=['img/grsch1.jpg','img/grsch2.jpg','img/grsch3.jpg'];
const itpImages:string[]=['img/itp1.jpg','img/itp2.jpg','img/itp3.jpg'];
const ukrmImages:string[]=['img/ukrm1.jpg','img/ukrm2.jpg','img/ukrm3.jpg'];
const vruImages:string[]=['img/vru1.jpg','img/vru2.jpg','img/vru3.jpg'];
const schunImages:string[]=['img/schun1.jpg','img/schun2.jpg','img/schun3.jpg'];

export interface CatalogItem{
  title:string;
  imageUrls:string[];
}
