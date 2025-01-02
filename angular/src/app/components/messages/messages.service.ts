import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Set<IMessage> = new Set();

  constructor() {
  }

  addMessage(message: IMessage): void {
    this.messages.add(message)
    if (message.timeout == null) message.timeout = 5000;
    setTimeout(() => {
      this.messages.delete(message)
    }, message.timeout);
  }

}

export interface IMessage {
  alertType: "info" | "warning" | "success" | "danger"
  message: string;
  timeout: number | null;
}

export class ErrorMessage implements IMessage {
  alertType: "info" | "warning" | "success" | "danger" = 'danger';
  timeout = 5000;
  message: string;

  constructor(message: string) {
    this.message = message
  }
}

export class SuccessMessage implements IMessage {
  alertType: "info" | "warning" | "success" | "danger" = 'success';
  timeout = 5000;

  message: string;

  constructor(message: string) {
    this.message = message
  }

}
