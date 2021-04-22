import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', {static: false}) titleRef: ElementRef;
  @ViewChild('textInput', {static: false}) textRef: ElementRef;

  title = '';
  text = '';

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };


      this.onAdd.emit(post);

      this.title = this.text = '';
    }else if (this.title === '') {
      this.titleRef.nativeElement.focus();
    }else if (this.text === '') {
      this.textRef.nativeElement.focus();
    }
  }
}
