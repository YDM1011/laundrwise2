import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../../crud.service';
import {Post} from '../../admin/post/post';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public arrayPost: Post[] = [];
  public cleanerData;
  constructor(
      private crud: CrudService,
      private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.auth.onSettings.subscribe((v: any) => {
        if (!v) return;
        this.cleanerData = v;
    })
    this.crud.get('post?query={}&skip=0&limit=3&sort={"date":-1}', ).then((value: any) => {
      this.arrayPost = value;
    }).catch(e => {});
  }
}
