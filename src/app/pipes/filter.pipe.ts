import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchInText: boolean = true): Post[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => {
      if (searchInText) {
        return post.title.toLowerCase().includes(search.toLowerCase()) || post.text.toLowerCase().includes(search.toLowerCase());
      }else {
        return post.title.toLowerCase().includes(search.toLowerCase());
      }
    });
  }

}
