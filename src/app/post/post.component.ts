import {Component, ContentChild, ElementRef, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{
 @Input() post!: Post;
 @Output() onRemove = new EventEmitter<number>()
 @ContentChild('readingInfo', {static: true}) readingInfo: ElementRef;

  removePost() {
   this.onRemove.emit(this.post.id);
  }

 ngOnInit() {

 }

 ngOnDestroy() {

 }

}
