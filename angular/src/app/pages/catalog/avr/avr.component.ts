import {Component, OnInit} from '@angular/core';
import {OurWorksComponent} from '../../../components/our-works/our-works.component';
import {AvrService} from './avr.service';
import {DiscountComponent} from '../../../components/discount/discount.component';
import {SliderComponent} from '../../../components/slider/slider.component';

@Component({
  selector: 'app-avr',
  imports: [
    OurWorksComponent,
    DiscountComponent,
    SliderComponent
  ],
  templateUrl: './avr.component.html',
  standalone: true,
  styleUrls:[ './avr.component.scss','../../../commons/styles/buttons.scss']
})
export class AvrComponent implements OnInit{

  fullImageUrl:string[]=[];
  constructor(private avrService: AvrService) {
  }
  ngOnInit(): void {
    this.avrService.getImagesUrl().subscribe({next:data=>{
      this.fullImageUrl=data
      }})
  }
}
