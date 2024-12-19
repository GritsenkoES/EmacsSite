import { Component } from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
