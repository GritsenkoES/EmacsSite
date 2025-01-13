import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  getCertificatesUrls():Observable<string[]>{
    return of(certificatesUrls)
  }
}

const certificatesUrls:string[]=['img/certificates/certificate1.jpg']
