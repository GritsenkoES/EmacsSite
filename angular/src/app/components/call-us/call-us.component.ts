import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgxPhoneField} from 'ngx-phone-field';
import {Iti} from 'intl-tel-input';
import {NgClass} from '@angular/common';
import {ErrorMessage, MessagesService, SuccessMessage} from '../messages/messages.service';
import {BackRequestService} from '../../commons/services/back-request.service';
import {PhoneInputService} from '../phone-input.service';



@Component({
  selector: 'app-call-us',
  imports: [ReactiveFormsModule, NgxPhoneField, NgClass],
  templateUrl: './call-us.component.html',
  styleUrl: './call-us.component.scss'
})
export class CallUsComponent{
  phoneForm = new FormGroup({
    phone: new FormControl<Iti | null>(null),
  });
  phoneValid:boolean | null | undefined
  constructor(private messageService:MessagesService,
              protected phoneInputParams:PhoneInputService,
              protected backRequestService:BackRequestService) {
  }
  handleSubmit() {
    const phone = this.phoneForm.get('phone')?.value;
    console.log(phone); // Iti instance
    this.phoneValid = phone?.isValidNumber()
    if(this.phoneValid===true){
      const successMessage= new SuccessMessage("Запрос отправлен")
      this.messageService.addMessage(successMessage)
    }else {
      const errorMessage= new ErrorMessage("Не валидный номер телефона")
      this.messageService.addMessage(errorMessage)
    }
  }


}
