import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-modal-container',
  template: `<div #modalcontainer></div>`,
  standalone:true
})
export class ModalContainerComponent implements OnInit {
  @ViewChild('modalcontainer', { static: true, read: ViewContainerRef })
  viewContainerRef: ViewContainerRef | undefined;

  constructor(
    private modalService: ModalService) {
  }
  ngOnInit() {
    if(this.viewContainerRef) this.modalService.RegisterContainerRef(this.viewContainerRef);
  }
}
