import {Component, OnInit} from '@angular/core';
import {CallUsComponent} from '../../components/call-us/call-us.component';
import {DiscountComponent} from '../../components/discount/discount.component';
import {ModalService} from '../../components/modal/modal.service';
import {CallRequestComponent} from '../../components/call-request/call-request.component';
import {OurWorksService} from '../../services/our-works.service';
import {OurWorks, OurWorksContent} from '../../types/OurWorksTypes';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-our-works',
  imports: [
    CallUsComponent,
    DiscountComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './our-works-page.component.html',
  standalone: true,
  styleUrls: ['./our-works-page.component.scss','../../commons/styles/buttons.scss','../../commons/styles/catalog.scss','../../commons/styles/title.scss']
})
export class OurWorksPageComponent implements OnInit{
  ourWorks:OurWorksContent = {content:[]}
  constructor(private modalService:ModalService,private ourWorksService: OurWorksService) {
  }
  ngOnInit(): void {
    this.ourWorksService.getOurWorksData().subscribe({next:data=>{
        this.ourWorks = data
      }})
  }



  requestCallShow() {
    this.modalService.open(CallRequestComponent)
  }

  changeMainImage(currentOurWork: OurWorks, item: string) {
      currentOurWork.mainImage=item
  }
}
