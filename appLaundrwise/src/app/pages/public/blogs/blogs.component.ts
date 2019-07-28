import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../crud.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public skip = 0;
  public  allBlogs: any = [];
  public loading: boolean = false;
  constructor(
      private crud: CrudService
  ) {}
  ngOnInit() {
    this.crud.get('post?query={}&skip=0&limit=8&sort={"date":-1}', ).then((value: any) => {
      this.allBlogs = value;
      this.loading = true;
    }).catch(e => {});
  }
  loadMore() {
    this.skip++;
    this.crud.get(`post?query={}&skip=${this.skip}&limit=8&sort={"date":-1}`, ).then((value: any) => {
      value.forEach( item => {
        this.allBlogs.push(item);
      });
    }).catch(e => {});
  }
}
