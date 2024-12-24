import {Component, OnInit} from '@angular/core';
import {SliderComponent} from '../../../components/slider/slider.component';
import {ChnoService} from './chno.service';
import {DiscountComponent} from '../../../components/discount/discount.component';
import {OurWorksComponent} from '../../../components/our-works/our-works.component';

@Component({
  selector: 'app-chno',
  imports: [
    SliderComponent,
    DiscountComponent,
    OurWorksComponent
  ],
  templateUrl: './chno.component.html',
  standalone: true,
  styleUrls: ['./chno.component.scss','../../../commons/styles/buttons.scss','../../../commons/styles/catalog.scss','../../../commons/styles/title.scss']
})
export class ChnoComponent implements OnInit{
  fullImageUrl:string[]=[];
  constructor(private chnoService: ChnoService) {
  }

  ngOnInit(): void {
    this.chnoService.getImagesUrl().subscribe({next:data=>{
        this.fullImageUrl=data
      }})
  }
}
