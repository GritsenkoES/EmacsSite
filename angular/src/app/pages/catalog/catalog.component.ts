import {Component, OnInit} from '@angular/core';
import {ActivationStart, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {CatalogService} from './catalog.service';

@Component({
  selector: 'app-catalog',
  imports: [
    RouterOutlet
  ],
  templateUrl: './catalog.component.html',
  standalone: true,
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit{
  imageUrls:string[]|undefined
  constructor(private router: Router, private catalogService: CatalogService)  {
    this.router.events
      .pipe(filter(event => event instanceof ActivationStart || event instanceof NavigationEnd))
      .subscribe(_ => {
       this.catalogService.getImagesUrls(this.currentUrl(this.router.url)).subscribe(urls => {
         this.imageUrls = urls;
       })

        }
      )
  }

  ngOnInit(): void {
    this.catalogService.getImagesUrls(this.currentUrl(this.router.url)).subscribe(urls => {
      this.imageUrls = urls;
    })
  }

  currentUrl(url: string): string {
    const urls: string[] = url.split('/')
    urls.shift()
    urls.shift()
    return urls[0]
  }
}
