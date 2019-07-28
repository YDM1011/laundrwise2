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
  }
  change() {
    this.crud.post('adminChangePass', {pass: this.password}, '', false, true).then((v: any) => {
    });
  }
}
