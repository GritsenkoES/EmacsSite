import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {OurWorksComponent} from '../../../components/our-works/our-works.component';
import {OurWorksService} from '../../../components/our-works/our-works.service';
import {AvrService} from './avr.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-avr',
  imports: [
    NgOptimizedImage,
    OurWorksComponent,
    NgForOf
  ],
  templateUrl: './avr.component.html',
  standalone: true,
  styleUrls:[ './avr.component.scss','../../../commons/styles/buttons.scss']
})
export class AvrComponent implements OnInit{

  bigImageUrl:number=0;
  fullImageUrl:string[]=[];

  constructor(private avrService: AvrService) {
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


  ngOnInit(): void {
    this.avrService.getImagesUrl().subscribe({next:data=>{
      this.fullImageUrl=data
      }})
  }
}
