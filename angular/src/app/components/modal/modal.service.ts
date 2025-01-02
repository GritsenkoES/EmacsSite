import {ComponentRef, Injectable, Type, ViewContainerRef, ViewRef} from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {ModalBase} from './modal-base';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public activeInstances: number=0;
  activeInstances$: Subject<number> = new Subject();
  modalRef: ComponentRef<any>[] = [];
  private viewContainerRef: ViewContainerRef | null=null;
  private currentModal:ViewRef|undefined=undefined
  constructor() {
  }

  RegisterContainerRef(vcRef: ViewContainerRef) {
    this.viewContainerRef = vcRef;
  }

  open<T extends ModalBase>(component: Type<T>, parameters?: Object):Observable<ComponentRef<T>>|undefined {
    if( this.viewContainerRef===null) return
    if(this.currentModal!==undefined){
      this.currentModal.destroy()
    }
    const componentRef=this.viewContainerRef.createComponent(component,parameters);
    this.viewContainerRef.insert(componentRef.hostView)
    this.activeInstances++;
    this.activeInstances$.next(this.activeInstances);
    componentRef.instance['componentIndex'] = this.activeInstances;
    componentRef.instance['destroy'] = () => {
      this.activeInstances--;
      this.activeInstances = Math.max(this.activeInstances, 0);

      const idx = this.modalRef.indexOf(componentRef);
      if (idx > -1) {
        this.modalRef.splice(idx, 1);
      }
      this.activeInstances$.next(this.activeInstances);
      componentRef.destroy();
    };
    const componentRef$ = new ReplaySubject();
    this.modalRef.push(componentRef);
    componentRef$.next(componentRef);
    componentRef$.complete();
    return <Observable<ComponentRef<T>>>componentRef$.asObservable();
  }
}
