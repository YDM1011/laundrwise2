import { Component, OnInit } from '@angular/core';
import {Post, PostObj} from '../post';
import {CrudService} from '../../../../crud.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  public post: Post = new PostObj();

  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
  }

  addPost() {
    this.crud.post('post', this.post);
  }
  fsData(data) {
    this.post.images.push(data.file );
  }
}
