import {Component, OnChanges, OnInit} from '@angular/core';
import {CrudService} from "../../../../crud.service";

@Component({
  selector: 'app-application-settings',
  templateUrl: './application-settings.component.html',
  styleUrls: ['./application-settings.component.scss']
})
export class ApplicationSettingsComponent implements OnInit, OnChanges {
  public checked: boolean = false;
  public checkedDef: any;
  public showSave:boolean = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.get('setting').then((v: any) => {
      this.checkedDef = v;
      this.checked = v.isAppBlock;
    });
  }

  ngOnChanges() {

  }

  save() {
    this.crud.post('setting', {isAppBlock:this.checked})
  }


}
