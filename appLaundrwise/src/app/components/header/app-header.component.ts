import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginpopupComponent} from '../loginpopup/loginpopup.component';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {CrudService} from "../../crud.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnChanges {
  public islogin = false;
  public me;
  public name;
  constructor(
      private router: Router,
      private crud: CrudService,
      private auth: AuthService,
      public dialog: MatDialog
  ) { }

  ngOnInit() {
      this.auth.onUpDate.subscribe((v:any)=>{
          if (v){
              this.islogin = this.auth.isAuth();
              this.me = v;
              this.name = this.me.firstName[0] + this.me.lastName[0]
          }
      });
      this.crud.get('me').then(v=>{
          this.auth.setUser(v)
      }).catch(e=>{})
  }

  ngOnChanges() {

  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginpopupComponent);
  }
  logout() {
    this.crud.post('logout', {}).then((value: any) => {
        this.router.navigate(['/'])
    },
    (error) => {
    }).catch(error => {});
  }


}
