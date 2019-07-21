import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public arrayPost: any;
  public id;
  public post: any;
  constructor(
      private route: ActivatedRoute,
      private crud: CrudService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = this.route.snapshot.paramMap.get('id');
      this.crud.getNoCache(`post/${this.id}`).then((v: any) => {
        this.post = Object.assign({}, v);
      });
    });

    this.crud.get('post?query={}&skip=0&limit=3&sort={"date":-1}', ).then((value: any) => {
      this.arrayPost = value;
    }).catch(e => {});
  }

}
