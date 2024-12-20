import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {YMapsComponent} from './ymaps/ymaps.component';
import {interval} from 'rxjs';
import {OurWorksService} from '../../components/our-works/our-works.service';
import {OurWorks, OurWorksContent} from './types';
import {OurWorksComponent} from '../../components/our-works/our-works.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    YMapsComponent,
    NgClass,
    OurWorksComponent
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
