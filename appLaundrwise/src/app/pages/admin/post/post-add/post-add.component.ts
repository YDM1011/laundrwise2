import { Component, OnInit } from '@angular/core';
import {Post, PostObj} from "../post";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  public post:Post = new PostObj();

  constructor() { }

  ngOnInit() {
  }

  addPost() {

  }
  fsData(data) {
    console.log(data);
  }
}
