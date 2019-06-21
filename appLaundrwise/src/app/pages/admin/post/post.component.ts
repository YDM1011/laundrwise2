import { Component, OnInit } from '@angular/core';
import {Post} from "./post";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: Post;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
      this.crud.get('post').then((v:any)=>{
        this.post = v;
      });
  }

}
