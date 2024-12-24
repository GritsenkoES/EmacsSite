import {Component} from '@angular/core';

import {UkrmService} from './ukrm.service';
import {DiscountComponent} from '../../../components/discount/discount.component';
import {OurWorksComponent} from '../../../components/our-works/our-works.component';

@Component({
  selector: 'app-ukrm',
  imports: [
    DiscountComponent,
    OurWorksComponent
  ],
  templateUrl: './ukrm.component.html',
  standalone: true,
  styleUrls: ['./ukrm.component.scss','../../../commons/styles/buttons.scss','../../../commons/styles/catalog.scss','../../../commons/styles/title.scss']
})
export class UkrmComponent {
  fullImageUrl:string[]=[];
  constructor(private ukrmService: UkrmService) {

  }
  ngOnInit(): void {
    this.ukrmService.getImagesUrl().subscribe({next:data=>{
        this.fullImageUrl=data
      }})
  }
}
