import {Component, input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {interval} from 'rxjs';

@Component({
  selector: 'app-slider',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './slider.component.html',
  standalone: true,
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  bigImageUrl:number=0;
  fullImageUrl=input.required<string[]>();
  constructor() {
    interval(3000).subscribe({
      next: () => {
        if(this.bigImageUrl===this.fullImageUrl.length-1){
          this.bigImageUrl=0
          return
        }
        this.bigImageUrl=this.bigImageUrl+1;
      }}
    )
  }
}
