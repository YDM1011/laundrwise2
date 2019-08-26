import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../crud.service';
import {Post} from '../../admin/post/post';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public islogin = false;
  public me;
  public arrayPost: Post[] = [];
  constructor(
      private crud: CrudService,
      private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.me = Object.assign({}, v);
        this.islogin = true;
      } else {
        this.islogin = false;
      }

    });
    this.crud.get('post?query={}&skip=0&limit=3&sort={"date":-1}', ).then((value: any) => {
      this.arrayPost = value;
    }).catch(e => {});
  }
}
