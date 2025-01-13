import { Component } from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {ModalComponent} from '../modal/modal.component';
import {ModalBase} from '../modal/modal-base';
import {ErrorMessage, MessagesService, SuccessMessage} from '../messages/messages.service';
import {PhoneInputService} from '../../services/phone-input.service';
import {BackRequestService} from '../../services/back-request.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgxPhoneField} from 'ngx-phone-field';
import {NgClass} from '@angular/common';
import {Iti} from 'intl-tel-input';

@Component({
  selector: 'app-call-request',
  imports: [
    SvgIconComponent,
    ModalComponent,
    FormsModule,
    NgxPhoneField,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './call-request.component.html',
  standalone: true,
  styleUrls: ['./call-request.component.scss', '../../commons/styles/buttons.scss',]
})
export class CallRequestComponent extends ModalBase{
  phoneForm = new FormGroup({
    phone: new FormControl<Iti | null>(null),
    name: new FormControl<string>('',Validators.required),
    comment: new FormControl<string>('')
  });
  phoneValid:boolean | null | undefined
  constructor(private messageService:MessagesService,
              protected phoneInputParams:PhoneInputService,
              protected backRequestService:BackRequestService) {
    super();
  }
  handleSubmit() {
    const phone = this.phoneForm.get('phone')?.value;
    console.log(phone);
    this.phoneValid = phone?.isValidNumber()
    if (this.phoneValid === true) {
      const successMessage = new SuccessMessage("Запрос отправлен")
      this.messageService.addMessage(successMessage)
    } else {
      const errorMessage = new ErrorMessage("Не валидный номер телефона")
      this.messageService.addMessage(errorMessage)
    }
  }
}
