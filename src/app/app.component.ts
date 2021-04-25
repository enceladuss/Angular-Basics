import {Component, OnInit, Output} from '@angular/core';

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


export class AppComponent implements OnInit {

  posts: Post[] = [
    {title: 'Definitely cool post heading', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quia!', id: 0}
    ];

  postsCount: number = this.posts.length;

  ngOnInit() {

  }

  updatePosts(post: Post) {
     this.posts.unshift(post);
     this.postsCount = this.posts.length;
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }
}

