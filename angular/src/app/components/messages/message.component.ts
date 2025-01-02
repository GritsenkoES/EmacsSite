import {Component} from '@angular/core';
import {IMessage, MessagesService} from "./messages.service";
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    SvgIconComponent,
    NgClass
  ],
  styleUrl: './message.component.scss'
})
export class MessageComponent{
  constructor(protected messageService:MessagesService) {
  }

  getSvgPath(message:IMessage):string{
    switch (message.alertType){
      case "info": return 'img/messages/info.svg'
      case "danger":return 'img/messages/error.svg'
      case "warning":return 'img/messages/warning.svg'
      case "success": return 'img/messages/success.svg'
    }
  }

  closeMessage(message:IMessage){
    this.messageService.messages.delete(message)
  }
}
