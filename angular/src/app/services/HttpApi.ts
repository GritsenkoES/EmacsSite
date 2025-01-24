import {RootApi} from './RootApi';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpApi extends RootApi{
  protocol: string='https';
  services: string = 'services'

  getAllServiceApi():string{
    return this.getRoot()+'/'+this.services+'/';
  }
}
