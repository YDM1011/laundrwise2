import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth.service";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-init-order',
  templateUrl: './init-order.component.html',
  styleUrls: ['./init-order.component.scss']
})
export class InitOrderComponent implements OnInit {

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
