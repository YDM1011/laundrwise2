import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginpopupComponent} from "../loginpopup/loginpopup.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
      public dialog: MatDialog,
      private router: Router
  ) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(LoginpopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (this.router.url === '/signup') {
        this.router.navigate(['/signup']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
