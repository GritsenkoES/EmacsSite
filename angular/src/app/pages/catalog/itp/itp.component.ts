import {Component, OnInit} from '@angular/core';
import {SliderComponent} from '../../../components/slider/slider.component';
import {ItpService} from './itp.service';
import {DiscountComponent} from '../../../components/discount/discount.component';
import {OurWorksComponent} from '../../../components/our-works/our-works.component';

@Component({
  selector: 'app-itp',
  imports: [
    SliderComponent,
    DiscountComponent,
    OurWorksComponent
  ],
  templateUrl: './itp.component.html',
  standalone: true,
  styleUrls: ['./itp.component.scss','../../../commons/styles/buttons.scss','../../../commons/styles/catalog.scss','../../../commons/styles/title.scss']
})
export class ItpComponent implements OnInit{
  fullImageUrl:string[]=[];
  constructor(private itpService: ItpService) {

  }
  ngOnInit(): void {
    this.itpService.getImagesUrl().subscribe({next:data=>{
        this.fullImageUrl=data
      }})
  }
}
