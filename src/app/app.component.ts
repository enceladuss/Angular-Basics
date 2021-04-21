import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'This is first post', text: 'This is first post text lorem', id: 1},
    {title: 'Definitely cool post heading', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quia!', id: 2}
    ];

}

