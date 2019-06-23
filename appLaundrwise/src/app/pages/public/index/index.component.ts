import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../crud.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public arrayPost;
  constructor(
      private crud: CrudService
  ) {
  }

  ngOnInit() {
    this.crud.get('post?query={}&skip=0&limit=3&sort={"date":-1}', ).then((value) => {
      this.arrayPost = value;
    }).catch(e => {});
  }
}
