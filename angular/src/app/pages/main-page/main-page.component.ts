import {Component} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {interval} from 'rxjs';
import {OurWorksComponent} from '../../components/our-works/our-works.component';
import {DiscountComponent} from '../../components/discount/discount.component';
import {CallUsComponent} from '../../components/call-us/call-us.component';
import {ModalService} from '../../components/modal/modal.service';
import {CallRequestComponent} from '../../components/call-request/call-request.component';
import {ContactsComponent} from '../../components/contacts/contacts.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    OurWorksComponent,
    DiscountComponent,
    CallUsComponent,
    ContactsComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss','../../commons/styles/buttons.scss','../../commons/styles/title.scss'],
})
export class MainPageComponent{

  currentDiv: number = 1;

  constructor(private modalService:ModalService) {
    interval(2000).subscribe({
        next: () => {
          this.currentDiv = this.currentDiv + 1
          if (this.currentDiv >6) {
            this.currentDiv=1}}}
    )
  }

  requestCallShow() {
    this.modalService.open(CallRequestComponent)
  }
}
