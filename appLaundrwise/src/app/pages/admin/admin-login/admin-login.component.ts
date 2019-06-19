
import {Component, OnInit} from '@angular/core';
import {AuthAdmin, AuthAdminObj} from "./auth-admin";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public adminAuth: AuthAdmin = new AuthAdminObj();
  constructor() {
  }

  ngOnInit() {
  }

  doAuth() {
    //api: api/adminCreate
    console.log(this.adminAuth);
  }
}
