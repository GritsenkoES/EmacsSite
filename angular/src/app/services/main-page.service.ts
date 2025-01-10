import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private ourServices:string[]=[
    'Разработка проектной и конструкторской документации',
    'Согласование проектной и конструкторской документации',
    'Производство и поставка щитового оборудования',
    'Производство и поставка насосных станций',
    'Монтажные и пусконаладочные работы',
    'Лабораторные испытания электроустановок'
  ]
  getOurServices():Observable<string[]>{
    return of(this.ourServices)
  }
}
