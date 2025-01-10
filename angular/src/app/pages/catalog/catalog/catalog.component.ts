import { Component } from '@angular/core';
import {CatalogService} from '../../../services/catalog.service';
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
  standalone: true,
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  constructor(protected catalogService:CatalogService) {

  }
}
