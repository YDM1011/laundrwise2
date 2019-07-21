import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginpopupComponent} from '../loginpopup/loginpopup.component';
import {Router} from '@angular/router';
import {CrudService} from '../../crud.service';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public islogin = false;
  public me;
  public name;
  public isopen = false;
  constructor(
      private router: Router,
      private crud: CrudService,
      private auth: AuthService,
      public dialog: MatDialog
  ) { }

  ngOnInit() {
      this.auth.onUpDate.subscribe(( v: any ) => {
          if (v) {
              this.islogin = this.auth.isAuth();
              this.me = v;
              this.name = this.me.firstName[0] + this.me.lastName[0];
              const populate = JSON.stringify({path: 'category', skip: 0, limit: 0});
              const query = JSON.stringify({city: this.me.city, country: this.me.country});
              this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((company: any) => {
                  this.auth.setCompany(company);
              });
          }
      });
      if (this.auth.isAuth()) {
          this.crud.get('me').then(v => {
              this.auth.setUser(v);
          }).catch(e => {});
      }

  }
    isOpen() {
        this.isopen = !this.isopen;
    }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginpopupComponent);
    if ( this.isopen ) {
        this.isopen = !this.isopen;
    } else {
        return;
    }
  }
  logout() {
    this.crud.logout('logout', {}).then((value: any) => {
        this.auth.setUser(null);
        this.router.navigate(['/']);
        if ( this.isopen ) {
            this.isopen = !this.isopen;
        } else {
            return;
        }
    },
    (error) => {
    }).catch(error => {});
  }


}
