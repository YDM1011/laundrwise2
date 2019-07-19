import {Component, OnChanges, OnInit} from '@angular/core';
import {CrudService} from "../../../../crud.service";

@Component({
  selector: 'app-application-settings',
  templateUrl: './application-settings.component.html',
  styleUrls: ['./application-settings.component.scss']
})
export class ApplicationSettingsComponent implements OnInit, OnChanges {
  public showSave:boolean = false;
  public setting:any;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.getNoCache('setting').then((v: any) => {
      if (v) {
        this.setting = v;
      }
    });
  }

  ngOnChanges() {

  }

  save(e) {
    e.preventDefault();
    this.crud.post('setting', this.setting);
  }


}
