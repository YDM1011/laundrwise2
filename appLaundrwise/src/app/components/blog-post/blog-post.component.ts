import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() itemPost;
  constructor() { }

  ngOnInit() {
  }

}
