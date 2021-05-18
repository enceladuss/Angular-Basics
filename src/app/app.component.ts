import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
      transition('* <=> special', [
        style({opacity: 0}),
        animate('1s'),
        style({opacity: 1}),
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent {

  boxState = 'start';

  moveAnimation(): void {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
}
