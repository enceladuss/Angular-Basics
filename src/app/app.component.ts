import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'Definitely cool post heading', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quia!', id: 0}
    ];

  // tslint:disable-next-line:typedef
  updatePosts(post: Post) {
     this.posts.unshift(post);
  }
}

