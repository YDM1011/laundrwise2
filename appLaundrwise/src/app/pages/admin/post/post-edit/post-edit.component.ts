import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrudService} from '../../../../crud.service';
import {Post, PostObj} from '../post';

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
      private crud: CrudService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.crud.get('post', this.id).then((v: any) => {
      this.initDataPost = v;
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
    this.crud.post('client', this.post, this.id ).then( ( v: any ) => {
      this.initDataPost = v;
      this.post = Object.assign({}, v);
    }).catch(e => {

    });
  }

}
