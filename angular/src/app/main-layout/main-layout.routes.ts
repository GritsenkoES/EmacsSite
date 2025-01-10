import {Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout.component';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {ContactsPageComponent} from '../pages/contacts-page/contacts-page.component';
import {CertificatesComponent} from '../pages/certificates/certificates.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {path: '', component:MainPageComponent },
      {path:'catalog',loadChildren:() => import('./../pages/catalog/catalog.routes').then(m => m.CATALOG_ROUTES)},
      {path:'contacts',component:ContactsPageComponent},
      {path:'certificates',component:CertificatesComponent}
    ]
  }
]
