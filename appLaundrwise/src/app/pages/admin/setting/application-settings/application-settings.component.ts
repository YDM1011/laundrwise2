import {Component, OnChanges, OnInit} from '@angular/core';
import {CrudService} from "../../../../crud.service";

@Component({
  selector: 'app-application-settings',
  templateUrl: './application-settings.component.html',
  styleUrls: ['./application-settings.component.scss']
})
export class ApplicationSettingsComponent implements OnInit {
  public checked: boolean = false;
  public checkedDef: boolean = false;
  public showSave:boolean = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.get('isCanAppDownload').then((v: any) => {
      this.checkedDef = v;
      this.checked = v;
    });
  }
  validate() {
    if (this.checked !== this.checkedDef) {
      this.showSave = true;
    } else {
      this.showSave = false;
    }
  }

}
