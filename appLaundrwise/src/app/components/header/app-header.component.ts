import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginpopupComponent} from '../loginpopup/loginpopup.component';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {CrudService} from "../../crud.service";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public islogin = false;
  constructor(
      private router: Router,
      private api: CrudService,
      private cookieService: CookieService,
      public dialog: MatDialog
  ) { }

  ngOnInit() {
    if (this.cookieService.get('userId')) {
      this.islogin = !this.islogin;
    }
  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginpopupComponent);
  }
  logout(e) {
    e.preventDefault();
    const apiUrl = 'logout';
    this.api.post(apiUrl, {}).then((value: any) => {
          this.router.navigate(['/']);
        },
        (error) => {
        }).catch(error => {});
  }


}
