import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth.service";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-init-layout',
  templateUrl: './init-layout.component.html',
  styleUrls: ['./init-layout.component.scss']
})
export class InitLayoutComponent implements OnInit {

  public isAuth = false;
  public me;

  constructor(
      private auth: AuthService,
      private crud: CrudService
  ) {

  }

  ngOnInit() {
    this.auth.onUpDate.subscribe((v:any)=>{
      if (v){
          this.isAuth = true;
          this.me = v;
      }
    });
    this.crud.get('me').then(v=>{
        this.auth.setUser(v)
    }).catch(e=>{

    })
  }

}
