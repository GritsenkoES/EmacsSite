import { Component } from '@angular/core';
import {ContactsComponent} from '../../components/contacts/contacts.component';
import {CallUsComponent} from '../../components/call-us/call-us.component';
import {DiscountComponent} from '../../components/discount/discount.component';

@Component({
  selector: 'app-contacts-page',
  imports: [
    ContactsComponent,
    CallUsComponent,
    DiscountComponent
  ],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss',
  standalone:true
})
export class ContactsPageComponent {

}
