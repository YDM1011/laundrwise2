import {Component, OnInit} from '@angular/core';
import {AuthAdmin, AuthAdminObj} from './auth-admin';
import {CrudService} from '../../../crud.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public adminAuth: AuthAdmin = new AuthAdminObj();
  constructor(
      private router: Router,
      private auth: AuthService,
      private crud: CrudService
  ) {}

  ngOnInit() {
  }

  doAuth() {
    this.crud.post('adminSignin', this.adminAuth, null, false, false).then((v: any) => {
      if(v) {
          if (this.auth.isAuthAdmin()) {
              this.router.navigate(['/admin/dashboard']);
              return false;
          } else {
              return true;
          }
      }
    }).catch(e => {});
  }
}
