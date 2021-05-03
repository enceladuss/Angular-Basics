import {Component} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';


@Component({
  selector: 'app-root',
  providers: [AppCounterService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {

  constructor(public appCounterService: AppCounterService) {}

}

