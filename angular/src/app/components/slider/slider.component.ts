import {Component, input} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {interval} from 'rxjs';

@Component({
  selector: 'app-slider',
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './slider.component.html',
  standalone: true,
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  bigImageUrl:number=0;
  changed:boolean = false;
  fullImageUrl=input.required<string[]>();
  constructor() {
    interval(3000).subscribe({
      next: () => {
        if(this.changed) return
        if(this.bigImageUrl===this.fullImageUrl().length-1){
          this.bigImageUrl=0
          this.changed=false
        }else {
          this.bigImageUrl=this.bigImageUrl+1;
          this.changed=false
        }
      }}
    )
  }

  selectImage(i: number) {
    this.changed=true;
    this.bigImageUrl=i
  }
}
