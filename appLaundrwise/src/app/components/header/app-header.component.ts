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
  @Input() islogin = false;
  @Input() me;
  public name;
  constructor(
      private router: Router,
      private api: CrudService,
      private auth: AuthService,
      private cookieService: CookieService,
      public dialog: MatDialog
  ) { }

  ngOnInit() {
      this.auth.onUpDate.subscribe((v:any)=>{
          if (v){
              this.islogin = this.auth.isAuth();
              this.me = v;
          }
      });
  }

  ngOnChanges() {
      if (this.me) {
          this.name = this.me.firstName[0] + this.me.lastName[0]
      }
  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginpopupComponent);
  }
  logout() {
    this.api.post('logout', {}).then((value: any) => {
        this.router.navigate(['/'])
    },
    (error) => {
    }).catch(error => {});
  }


}
