import { Component } from '@angular/core';
import {CallUsComponent} from '../../components/call-us/call-us.component';
import {OurWorksComponent} from '../../components/our-works/our-works.component';

@Component({
  selector: 'app-certificates',
  imports: [
    CallUsComponent,
    OurWorksComponent
  ],
  templateUrl: './certificates.component.html',
  standalone: true,
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {

}
