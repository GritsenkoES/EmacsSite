import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [
    RouterLink
  ],
  templateUrl: './back-button.component.html',
  standalone: true,
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {

}
