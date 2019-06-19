import {Component, OnInit} from '@angular/core';
import {AuthAdmin, AuthAdminObj} from "../admin-login/auth-admin";

@Component({
  selector: 'app-admin-new-post',
  templateUrl: './admin-new-post.component.html',
  styleUrls: ['./admin-new-post.component.css']
})
export class AdminNewPostComponent implements OnInit {
  public adminAuth: AuthAdmin = new AuthAdminObj();
  constructor() {
  }

  ngOnInit() {
  }

  doCreate() {
    //api: api/adminSignin
    console.log(this.adminAuth);
  }

}
