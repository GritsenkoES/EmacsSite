import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import {filter} from 'rxjs';
import {BackButtonComponent} from '../components/back-button/back-button.component';
import {NgIf} from '@angular/common';
import {MessageComponent} from '../components/messages/message.component';
import {ModalContainerComponent} from '../components/modal/modal.container';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BackButtonComponent,
    NgIf,
    MessageComponent,
    ModalContainerComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  showBackButton = false;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.showBackButtonFn()
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(_ => {
        this.showBackButtonFn()
      })
  }
  showBackButtonFn(){
    const url: string[] = this.router.url.split('/');
    this.showBackButton = url[0] !== "" || url[1] !== "";
  }
}
