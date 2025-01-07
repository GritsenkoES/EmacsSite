import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  urls:Map<string, CatalogItem>

  constructor() {
    this.urls = new Map<string, CatalogItem>();
    this.urls.set('avr',{imageUrls:avrImages,title:'АВТОМАТИЧЕСКИЙ ВВОД РЕЗЕРВА (АВР)'})
    this.urls.set('schno',{imageUrls:schnoImages,title:'ЩИТЫ НАРУЖНЕГО ОСВЕЩЕНИЯ (ЩНО)'})
    this.urls.set('grsch',{imageUrls:grschImages,title:'ГЛАВНЫЙ РАСПРЕДЕЛИТЕЛЬНЫЙ ЩИТ ТИПА ГРЩ'})
    this.urls.set('itp',{imageUrls:itpImages,title:'ЩИТЫ ИТП'})
    this.urls.set('ukrm',{imageUrls:ukrmImages,title:'УСТРОЙСТВА КОМПЕНСАЦИИ РЕАКТИВНОЙ МОЩНОСТИ (УКРМ)'})
    this.urls.set('vru',{imageUrls:vruImages,title:'ВВОДНОЕ РАСПРЕДЕЛИТЕЛЬНОЕ УСТРОЙСТВО (ВРУ)'})
    this.urls.set('schun',{imageUrls:schunImages,title:'ШКАФЫ УПРАВЛЕНИЯ НАСОСАМИ (ШУН)'})
    this.urls.set('all',{imageUrls:[],title:'ЗАКАЗЫВАЙТЕ НАПРЯМУЮ У ПРОИЗВОДИТЕЛЯ'})
  }

  getCatalogItems():Map<string, CatalogItem>{
    return this.urls
  }

  getImagesUrls(path:string):Observable<CatalogItem>{
    const urls = this.urls.get(path)
    if(urls) return of(urls)
    return of({title:'',imageUrls:[]})
  }
}
const avrImages:string[]=["img/catalog/avr/avr1.jpg","img/catalog/avr/avr_description_image2.png","img/catalog/avr/avr_description_image3.png"]
const schnoImages:string[]=['img/catalog/schno/schno1.jpg','img/catalog/schno/schno2.jpg','img/catalog/schno/schno3.jpg'];
const grschImages:string[]=['img/catalog/grsch/grsch1.jpg','img/catalog/grsch/grsch2.jpg','img/catalog/grsch/grsch3.jpg'];
const itpImages:string[]=['img/catalog/itp/itp1.jpg','img/catalog/itp/itp2.jpg','img/catalog/itp/itp3.jpg'];
const ukrmImages:string[]=['img/catalog/ukrm/ukrm1.jpg','img/catalog/ukrm/ukrm2.jpg','img/catalog/ukrm/ukrm3.jpg'];
const vruImages:string[]=['img/catalog/vru/vru1.jpg','img/catalog/vru/vru2.jpg','img/catalog/vru/vru3.jpg'];
const schunImages:string[]=['img/catalog/schun/schun1.jpg','img/catalog/schun/schun2.jpg','img/catalog/schun/schun3.jpg'];

export interface CatalogItem{
  title:string;
  imageUrls:string[];
}
