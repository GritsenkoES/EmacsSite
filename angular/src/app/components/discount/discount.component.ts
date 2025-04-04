import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgxPhoneField} from "ngx-phone-field";
import {Iti} from 'intl-tel-input';
import {ErrorMessage, MessagesService, SuccessMessage} from '../messages/messages.service';
import {NgClass} from '@angular/common';
import {BackRequestService} from '../../services/back-request.service';
import {PhoneInputService} from '../../services/phone-input.service';

@Component({
  selector: 'app-discount',
  imports: [
    FormsModule,
    NgxPhoneField,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './discount.component.html',
  standalone: true,
  styleUrl: './discount.component.scss'
})
export class DiscountComponent {
  phoneForm = new FormGroup({
    phone: new FormControl<Iti | null>(null),
    name: new FormControl<string>('', Validators.required)
  });
  phoneValid: boolean | null | undefined

  constructor(private messageService: MessagesService,
              protected phoneInputParams: PhoneInputService,
              protected backRequestService: BackRequestService) {
  }

  handleSubmit() {
    const phone = this.phoneForm.get('phone')?.value;
    this.phoneValid = phone?.isValidNumber()
    let value: string | null = null
    if (this.phoneValid === true) {
      value = phone?.getNumber().replace("+", "")!!!
    } else {
      const errorMessage = new ErrorMessage("Невалидный номер телефона")
      this.messageService.addMessage(errorMessage)
      return;
    }
    if (!this.phoneForm.get('name')?.valid) {
      const errorMessage = new ErrorMessage("Заполните пожалуйста Ваше имя")
      this.messageService.addMessage(errorMessage)
      return
    }
    const name: string = this.phoneForm.get('name')?.value!!;

    this.sendRequest(name, value!!)
  }

  sendRequest(name: string, phone: string) {
    this.backRequestService.sendCallRequest(name, phone, null).subscribe({
      next: response => {
        if (response.httpStatus === 200) {
          const successMessage = new SuccessMessage(response.message)
          this.messageService.addMessage(successMessage)
        } else {
          const errorMessage = new ErrorMessage(response.message)
          this.messageService.addMessage(errorMessage)
        }
        this.phoneForm.reset();
      }
    })
  }
}
