import {Routes} from '@angular/router';
import {CatalogComponent} from './catalog.component';
import {AvrComponent} from './avr/avr.component';
import {ChnoComponent} from './chno/chno.component';
import {GrschComponent} from './grsch/grsch.component';
import {ItpComponent} from './itp/itp.component';
import {UkrmComponent} from './ukrm/ukrm.component';
import {VruComponent} from './vru/vru.component';
import {SchunComponent} from './schun/schun.component';


export const CATALOG_ROUTES: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children:[
      {path:'avr',component:AvrComponent},
      {path:'schno',component:ChnoComponent},
      {path:'grsch',component:GrschComponent},
      {path:'itp',component:ItpComponent},
      {path:'ukrm',component:UkrmComponent},
      {path:'vru',component:VruComponent},
      {path:'schun',component:SchunComponent}
    ]
  }
]
