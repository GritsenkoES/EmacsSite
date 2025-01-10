import { Injectable } from '@angular/core';
import {SomeOptions} from 'intl-tel-input';

@Injectable({
  providedIn: 'root'
})
export class PhoneInputService {

  phoneInputParams():SomeOptions{
    return params
  }

}

const params = {
  initialCountry: 'ru',
  onlyCountries:['ru','kz','uz','fi'],
  countryOrder:['ru','kz'],
  allowDropdown: true,
  strictMode:true,
  formatOnDisplay:true,
  // @ts-ignore
  loadUtilsOnInit: async () => import('intl-tel-input/utils'),
  placeholderNumberType:"FIXED_LINE" as const
};
