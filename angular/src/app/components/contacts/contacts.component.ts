import { Component } from '@angular/core';
import {YMapsComponent} from './ymaps/ymaps.component';

@Component({
  selector: 'app-contacts',
  imports: [
    YMapsComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  standalone:true
})
export class ContactsComponent {

}
