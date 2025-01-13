import {Component, OnInit} from '@angular/core';
import {KeyValuePipe, NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {interval} from 'rxjs';
import {OurWorksComponent} from '../../components/our-works/our-works.component';
import {DiscountComponent} from '../../components/discount/discount.component';
import {CallUsComponent} from '../../components/call-us/call-us.component';
import {ModalService} from '../../components/modal/modal.service';
import {CallRequestComponent} from '../../components/call-request/call-request.component';
import {ContactsComponent} from '../../components/contacts/contacts.component';
import {RouterLink} from '@angular/router';
import {CatalogItem, CatalogService} from '../../services/catalog.service';
import {MainPageService} from '../../services/main-page.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    OurWorksComponent,
    DiscountComponent,
    CallUsComponent,
    ContactsComponent,
    RouterLink,
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss','../../commons/styles/buttons.scss','../../commons/styles/title.scss'],
})
export class MainPageComponent implements OnInit{
  catalogsItems:Map<string,CatalogItem>=new Map();
  currentDiv: number = 1;
  currentService:number=0;
  ourServices:string[]=[];
  constructor(private modalService:ModalService,
              private catalogService: CatalogService,
              private mainPageService: MainPageService) {

    interval(2000).subscribe({
        next: () => {
          this.currentDiv = this.currentDiv + 1
          if (this.currentDiv >6) {
            this.currentDiv=1}
          this.currentService = this.currentService+1
          if(this.currentService >= this.ourServices.length){
            this.currentService=0
          }
        }
    }
    )

  }
  ngOnInit(): void {
    this.catalogService.getCatalogsItemForMainPage().subscribe(catalogItems => {
      this.catalogsItems = catalogItems;
    })
    this.mainPageService.getOurServices().subscribe(services => {
      this.ourServices = services;
    })
  }
  requestCallShow() {
    this.modalService.open(CallRequestComponent)
  }




}
