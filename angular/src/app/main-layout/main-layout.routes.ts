import {Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout.component';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {AvrComponent} from '../pages/catalog/avr/avr.component';
import {ChnoComponent} from '../pages/catalog/chno/chno.component';
import {GrschComponent} from '../pages/catalog/grsch/grsch.component';
import {ItpComponent} from '../pages/catalog/itp/itp.component';
import {UkrmComponent} from '../pages/catalog/ukrm/ukrm.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {path: '', component:MainPageComponent },
      {path:'catalog/avr',component:AvrComponent},
      {path:'catalog/schno',component:ChnoComponent},
      {path:'catalog/grsch',component:GrschComponent},
      {path:'catalog/itp',component:ItpComponent},
      {path:'catalog/ukrm',component:UkrmComponent}
    ]
  }
]
