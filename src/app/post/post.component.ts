import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const zlp = this.postService.getById(+params.id);
      if (zlp) {
        this.post = zlp;
      }

    });
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}
