import { Component } from '@angular/core';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({background: 'red', opacity: 0})),
      state('end', style({background: 'green', opacity: 1, transform: 'scale(1.2)'}))
    ])
  ]
})
export class AppComponent {

  boxState = 'start'

  MoveAnimation() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
}
