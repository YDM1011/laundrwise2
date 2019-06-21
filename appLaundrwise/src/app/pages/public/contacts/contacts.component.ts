import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../crud.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public arrayPost;
  constructor(
      private crud: CrudService
  ) {
  }

  ngOnInit() {
    this.crud.get('post?query={}&skip=0&limit=3', ).then((value) => {
      this.arrayPost = value;
    }).catch(e => {});
  }
}
