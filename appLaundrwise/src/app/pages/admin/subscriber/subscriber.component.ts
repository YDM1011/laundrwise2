import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

  public subscriber = [];
  public loaded:boolean = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
      this.crud.getNoCache('subscriber').then((v: any) => {
        this.subscriber = v;
        this.loaded = true;
      });
  }

}
