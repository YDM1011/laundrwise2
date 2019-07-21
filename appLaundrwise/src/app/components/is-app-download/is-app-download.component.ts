import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../crud.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-is-app-download',
  templateUrl: './is-app-download.component.html',
  styleUrls: ['./is-app-download.component.scss']
})
export class IsAppDownloadComponent implements OnInit {
  public isshow = false;
  constructor(
      private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.onSettings.subscribe((v: any) => {
      if (!v) return;
      this.isshow = v.isAppBlock;
    })
  }

}
