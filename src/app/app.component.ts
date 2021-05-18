import { Component } from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({background: 'red'})),
      state('end', style({background: 'green', transform: 'scale(1.2)'})),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('450ms ease-in-out')),
      transition('* => special', [
        style({background: 'pink'}),
        animate('1s'),
      ]),
      // void => *
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-50%)'}),
        animate('0.5s ease-out', style({
          background: 'red',
          opacity: '1',
          transform: 'translateX(0)'
        }))
      ]),
      // * => void
      transition(':leave', [
        style({opacity: 1, fontWeight: 'bold', color: '#000'}),
        group([
          animate('0.5s ease-out', style({
            opacity: '0',
            transform: 'scale(1.2)'
          })),
          animate('0.3s', style({
            fontWeight: 'bold',
            color: '#fff'
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {

  boxState = 'start';

  visible = true;

  moveAnimation(): void {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
}
