import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudService} from '../../../../crud.service';
import {Post, PostObj} from '../post';
import Swal from "sweetalert2";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  public id;
  public post: Post = new PostObj();
  public initDataPost: Post = new PostObj();
  public isBlok: boolean = false;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private crud: CrudService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.crud.get('post', this.id).then((v: any) => {
      this.initDataPost = v;
      console.log(this.initDataPost)
      this.post = Object.assign({}, v);
    });
  }

  validate() {
    let isTrue = false;
    for (const key in this.post) {
      if (this.initDataPost[key] !== this.post[key]) isTrue = true;
    }
    return isTrue;
  }

  btnBlok(is) {
    this.isBlok = is;
  }
  formCheck() {
    this.btnBlok(this.validate());
  }
  userSubmit() {
    this.crud.post('post', this.post, this.id).then( ( v: any ) => {
      this.initDataPost = v;
      this.post = Object.assign({}, v);
      this.router.navigate(['/admin/posts']);
    }).catch(e => {

    });
  }
  removeImg() {
    Swal.fire({
      title: 'Do you confirm the deletion?',
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel!',
      confirmButtonColor: '#dd4535',
    }).then((result) => {
      if (result.value) {
        delete this.initDataPost.images[0];
        this.initDataPost.images = [];
        delete this.post.images[0];
        this.post.images = [];
        this.btnBlok(this.validate());
        console.log(this.initDataPost);
        console.log(this.post);
      }
    });
  }

  fsData(data) {
    this.post.images.push(data.file);
    this.initDataPost.images.push(data.file);
    console.log(this.post);
    console.log(this.initDataPost);
    this.btnBlok(this.validate());
  }
}
