import { Component } from '@angular/core';
import {CatalogService} from '../catalog.service';
import {KeyValuePipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [
    NgForOf,
    NgOptimizedImage,
    RouterLink,
    KeyValuePipe,
    NgIf
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  constructor(protected catalogService:CatalogService) {

  }
}
