import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth.service";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-init-layout',
  templateUrl: './init-layout.component.html',
  styleUrls: ['./init-layout.component.scss']
})
export class InitLayoutComponent implements OnInit {


  constructor(
      private auth: AuthService,
      private crud: CrudService
  ) {

  }

  ngOnInit() {
    this.crud.get('me').then(v=>{
        this.auth.setUser(v)
    }).catch(e=>{

    })
  }

}
