import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({background: 'red', opacity: 0})),
      state('end', style({background: 'green', opacity: 1, transform: 'scale(1.2)'})),
      transition('start => end', animate(450)),
      transition('end => start', animate('450ms ease-in-out'))
    ])
  ]
})
export class AppComponent {

  boxState = 'start';

  moveAnimation(): void {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
}
