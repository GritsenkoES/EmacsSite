import {Injectable} from '@angular/core';
import {OurWorks, OurWorksContent} from '../types/OurWorksTypes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurWorksService {

  constructor() { }

  getOurWorksData(): Observable<OurWorksContent>{
    return of(content)
  }

}
const contentItem1:OurWorks = {
  title:'Главный распределительный щит для объекта Строительство здания общеобразовательной школы по адресу: Лиственная\n' +
    '        ул., участок № 1, (территория, ограниченная Северным пр., ул. Есенина, проектируемой улицей № 2, Лиственной\n' +
    '        ул.,\n' +
    '        ул. Жака Дюкло, проектируемой пешеходной улицей, проектируемой улицей № 1; ФЗУ № 20) (1000 мест).',
  mainImage:"img/our_works/grsch_1.png",
  imagesSrc:["img/our_works/grsch_1.png","img/our_works/grsch_1_2.png","img/our_works/grsch_1_3.png","img/our_works/grsch_1_4.png","img/our_works/grsch_1_5.png"]
}
const contentItem2:OurWorks = {
  title:'Главный распределительный щит для объекта Строительство здания  общеобразовательной школы на 1000 мест по адресу: ' +
    'Санкт-Петербург,  муниципальный округ Полюстрово Муринская дорога, участок 10 (территория, ограниченная Приозерским направлением ж.д.,' +
    ' административной границей  Санкт-Петербурга, береговой линией Муринского ручья, в Красногвардейском районе; ФЗУ № 35)  (1000 мест)',
  mainImage:"img/our_works/grsch_2.png",
  imagesSrc:["img/our_works/grsch_2.png","img/our_works/grsch_1_2.png","img/our_works/grsch_1_3.png","img/our_works/grsch_1_4.png","img/our_works/grsch_1_5.png"]
}

const content:OurWorksContent={
  content:[contentItem1,contentItem2]
}
