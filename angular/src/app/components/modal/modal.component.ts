import {Component} from '@angular/core';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  host: {
    '[@modal]': 'true'
  },
  template: `
    <div class="modal-overlay" @modalDialog>
      <div class="modal-body">
        <ng-content></ng-content>
      </div>
    </div>`,
  animations: [
    trigger('modal', [
      transition('void => *', [
        style({ opacity: 0 }),
        group([
          query('@modalDialog', animateChild()),
          animate(150, style({ opacity: 1 })),
        ])
      ]),
      transition('* => void', [
        group([
          query('@modalDialog', animateChild()),
          animate(150, style({ opacity: 0 }))
        ])
      ])
    ]),
    trigger('modalDialog', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }))
      ])
    ])
  ],
  styleUrl:'modal.components.scss',
  selector: 'app-modal',
  standalone:true
})
export class ModalComponent {

}
