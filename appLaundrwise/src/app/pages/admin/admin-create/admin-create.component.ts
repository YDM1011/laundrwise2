import { Component, OnInit } from '@angular/core';
import {AuthAdmin, AuthAdminObj} from "../admin-login/auth-admin";

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {
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
