import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../crud.service";

@Component({
  selector: 'app-is-app-download',
  templateUrl: './is-app-download.component.html',
  styleUrls: ['./is-app-download.component.scss']
})
export class IsAppDownloadComponent implements OnInit {
  public isshow = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.get('isCanAppDownload').then(v => {
      this.isshow = Boolean(v);
    }).catch(e => {});
  }

}
