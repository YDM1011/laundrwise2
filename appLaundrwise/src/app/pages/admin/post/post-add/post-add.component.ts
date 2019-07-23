import { Component, OnInit } from '@angular/core';
import {Post, PostObj} from '../post';
import {CrudService} from '../../../../crud.service';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  public post: Post = new PostObj();

  constructor(
      private crud: CrudService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  addPost() {
    if (this.post.images.length === 0 || !this.post.text || !this.post.title ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'All field required'
      });
    } else {
      this.crud.post('post', this.post, null, ['post']).then(value => {
        this.router.navigate(['/admin/posts']);
      });
    }
  }
  fsData(data) {
    this.post.images.push(data.file);
  }
}
