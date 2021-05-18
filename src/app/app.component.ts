import { Component } from '@angular/core';
import {boxAnimations} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimations]
})
export class AppComponent {

  boxState = 'start';

  visible = true;

  moveAnimation(): void {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  };

  animationStarted(event: any):void {
    console.log('start', event)
  }

  animationDone(event: any):void {
    console.log('end', event)
  }
}
