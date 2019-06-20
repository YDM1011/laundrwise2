import { Component, OnInit } from '@angular/core';
import {LoginpopupComponent} from "../loginpopup/loginpopup.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginpopupComponent, { width: '50%', height: '50%' });
  }

}
