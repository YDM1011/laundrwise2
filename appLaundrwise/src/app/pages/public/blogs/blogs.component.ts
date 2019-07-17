import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../crud.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public id = 1;
  public  allBlogs: any = [];
  constructor(
      private crud: CrudService
  ) {}
  ngOnInit() {
    this.crud.get('post?query={}&skip=0&limit=8&sort={"date":-1}', ).then((value: any) => {
      this.allBlogs = value;
    }).catch(e => {});
  }
}
