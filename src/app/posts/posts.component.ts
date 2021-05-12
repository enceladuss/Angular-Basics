import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service'
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds = false;
  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = !!params.showIds;
    });

    this.route.fragment.subscribe(fragment => {
      console.log('Fragment', fragment)
    })
  }

  toggleIds() {
    this.route.queryParams.subscribe((params: Params) => {
      if(params.showIds === 'true') {
        this.showIds = true;
      }else {
        this.showIds = false;
      }
    });
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true
      },
      fragment: 'program-fragment'
    })
  }
}