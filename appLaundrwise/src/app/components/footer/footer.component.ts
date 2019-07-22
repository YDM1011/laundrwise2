import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public date =  new Date().getFullYear();
public info: any;
  constructor(
      private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.onSettings.subscribe((v: any) => {
      if (!v) return;
      this.info = v;
    });
  }

}
