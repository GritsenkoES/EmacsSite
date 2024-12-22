import {Component} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {YMapsComponent} from './ymaps/ymaps.component';
import {interval} from 'rxjs';
import {OurWorksComponent} from '../../components/our-works/our-works.component';
import {DiscountComponent} from '../../components/discount/discount.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    YMapsComponent,
    NgClass,
    OurWorksComponent,
    DiscountComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss','../../commons/styles/buttons.scss','../../commons/styles/title.scss'],
})
export class MainPageComponent{

  currentDiv: number = 1;

  constructor() {
    interval(2000).subscribe({
        next: () => {
          this.currentDiv = this.currentDiv + 1
          if (this.currentDiv >6) {
            this.currentDiv=1}}}
    )
  }
}
