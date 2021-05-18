import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {shake, tada} from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <hr>
    <div [@shake] [@tada] *ngIf="visible" class="rect"></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('shake', [transition('* => void', useAnimation(shake, {params: {timing: 1, delay: 0.2}}))]),
    trigger('tada', [transition('void => *', useAnimation(tada, {params: {timing: 1, delay: 0}}))])
  ]
})
export class AnimateComponent implements OnInit {

  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
