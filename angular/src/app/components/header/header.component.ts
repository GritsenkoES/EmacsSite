import {Component} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {RouterLink} from '@angular/router';
import {ModalService} from '../modal/modal.service';
import {CallRequestComponent} from '../call-request/call-request.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SvgIconComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private modalService: ModalService) {
  }

  requestCallShow() {
    this.modalService.open(CallRequestComponent)
  }
}
