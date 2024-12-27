import {Component, OnInit} from '@angular/core';
import {ActivationStart, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {CatalogItem, CatalogService} from './catalog.service';
import {SliderComponent} from '../../components/slider/slider.component';
import {DiscountComponent} from '../../components/discount/discount.component';
import {OurWorksComponent} from '../../components/our-works/our-works.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [
    RouterOutlet,
    SliderComponent,
    DiscountComponent,
    OurWorksComponent,
    NgIf
  ],
  templateUrl: './catalog.component.html',
  standalone: true,
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit{
  currentCatalogItem:CatalogItem|undefined
  constructor(private router: Router, private catalogService: CatalogService)  {
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
}
