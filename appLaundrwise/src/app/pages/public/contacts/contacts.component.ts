import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../crud.service';
import {Post} from '../../admin/post/post';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public arrayPost: Post[] = [];
  constructor(
      private crud: CrudService
  ) {
  }

  ngOnInit() {
    this.crud.get('post?query={}&skip=0&limit=3&sort={"date":-1}', ).then((value: any) => {
      this.arrayPost = value;
    }).catch(e => {});
  }
}
