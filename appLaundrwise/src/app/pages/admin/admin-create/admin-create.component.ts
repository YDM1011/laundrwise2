import { Component, OnInit } from '@angular/core';
import {AuthAdmin, AuthAdminObj} from "../admin-login/auth-admin";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {
    public adminAuth: AuthAdmin = new AuthAdminObj();
    constructor(private crud: CrudService) {
    }

    ngOnInit() {
    }

    doCreate() {
            //api: api/adminSignin
        this.crud.post('adminCreate', this.adminAuth)
            .then((v:any)=>{

            });
        console.log(this.adminAuth);
    }
}
