import {Component, OnInit} from '@angular/core';
import {ActivationStart, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {CatalogItem, CatalogService} from './catalog.service';
import {SliderComponent} from '../../components/slider/slider.component';
import {DiscountComponent} from '../../components/discount/discount.component';
import {OurWorksComponent} from '../../components/our-works/our-works.component';
import {NgIf} from '@angular/common';
import {CallRequestComponent} from '../../components/call-request/call-request.component';
import {ModalService} from '../../components/modal/modal.service';
import {CallUsComponent} from '../../components/call-us/call-us.component';

@Component({
  selector: 'app-catalog',
  imports: [
    RouterOutlet,
    SliderComponent,
    DiscountComponent,
    OurWorksComponent,
    NgIf,
    CallUsComponent
  ],
  templateUrl: './catalog.component.html',
  standalone: true,
  styleUrls: ['../../commons/styles/buttons.scss','../../commons/styles/catalog.scss','../../commons/styles/title.scss']
})
export class CatalogComponent implements OnInit{
  currentCatalogItem:CatalogItem|undefined
  constructor(private router: Router,
              private catalogService: CatalogService,
              private modalService:ModalService)  {
    this.router.events
      .pipe(filter(event => event instanceof ActivationStart || event instanceof NavigationEnd))
      .subscribe(_ => {
       this.catalogService.getImagesUrls(this.currentUrl(this.router.url)).subscribe(catalogItem => {
         this.currentCatalogItem = catalogItem;
       })

        }
      )
  }

  ngOnInit(): void {
    this.catalogService.getImagesUrls(this.currentUrl(this.router.url)).subscribe(catalogItem => {
      this.currentCatalogItem = catalogItem;
    })
  }

  currentUrl(url: string): string {
    const urls: string[] = url.split('/')
    urls.shift()
    urls.shift()
    return urls[0]
  }
  requestCallShow() {
    this.modalService.open(CallRequestComponent)
  }
}
