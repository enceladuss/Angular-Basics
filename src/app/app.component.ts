import {Component, OnInit, Output} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {

  search = '';

  searchInText = true;

  posts: Post[] = [
    {title: 'Beer', text: 'Some text about beeer, ...which production may use wheat'},
    {title: 'Bread', text: 'Some text about bread ...most made out of wheat'},
    {title: 'Javscript', text: 'Some text about javascript, ...by deafult has no typization'},
  ];

}

