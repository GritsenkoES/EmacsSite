import {Component, OnInit} from '@angular/core';

import {GrschService} from './grsch.service';
import {SliderComponent} from '../../../components/slider/slider.component';
import {DiscountComponent} from '../../../components/discount/discount.component';
import {OurWorksComponent} from '../../../components/our-works/our-works.component';

@Component({
  selector: 'app-grsch',
  imports: [
    SliderComponent,
    DiscountComponent,
    OurWorksComponent
  ],
  templateUrl: './grsch.component.html',
  standalone: true,
  styleUrls: ['./grsch.component.scss','../../../commons/styles/buttons.scss','../../../commons/styles/catalog.scss','../../../commons/styles/title.scss']
})
export class GrschComponent implements OnInit{
  fullImageUrl:string[]=[];
  constructor(private grschService: GrschService) {
  }

  ngOnInit(): void {
    this.grschService.getImagesUrl().subscribe({next:data=>{
        this.fullImageUrl=data
      }})
  }
}
