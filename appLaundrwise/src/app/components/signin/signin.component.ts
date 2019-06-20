import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginpopupComponent} from "../loginpopup/loginpopup.component";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    let dialogRef = this.dialog.open(LoginpopupComponent);
  }

}
