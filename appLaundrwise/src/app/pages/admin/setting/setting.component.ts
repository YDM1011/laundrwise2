import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public password;
  public admin: any;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.getNoCache('admin').then((v: any) => {
      this.admin = v;
    });
  }
  change() {
    this.crud.post('admin', {pass: this.password}, this.admin._id, false, true).then((v: any) => {
    });
  }
}
