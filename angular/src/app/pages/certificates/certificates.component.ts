import {Component, OnInit} from '@angular/core';
import {CallUsComponent} from '../../components/call-us/call-us.component';
import {OurWorksComponent} from '../../components/our-works/our-works.component';
import {CertificatesService} from '../../services/certificates.service';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {CallRequestComponent} from '../../components/call-request/call-request.component';
import {ModalService} from '../../components/modal/modal.service';

@Component({
  selector: 'app-certificates',
  imports: [
    CallUsComponent,
    OurWorksComponent,
    NgOptimizedImage,
    NgForOf,
    NgClass
  ],
  templateUrl: './certificates.component.html',
  standalone: true,
  styleUrls: ['./certificates.component.scss','../../commons/styles/buttons.scss','../../commons/styles/catalog.scss','../../commons/styles/title.scss']
})
export class CertificatesComponent implements OnInit{
  urls:string[]=[]
  currentUrl:number=0
  constructor(private certificatesService:CertificatesService,private modalService:ModalService) {}

  ngOnInit(): void {
    this.certificatesService.getCertificatesUrls().subscribe(urls=>{
      this.urls=urls
    })
  }

  requestCallShow() {
    this.modalService.open(CallRequestComponent)
  }

}
