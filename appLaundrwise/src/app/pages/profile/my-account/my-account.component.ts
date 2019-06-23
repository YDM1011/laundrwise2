import {Component, OnInit} from '@angular/core';
import {AuthAccount, AuthAccountObj} from './auth-account';
import {CrudService} from '../../../crud.service';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public userId: number;
  public isBlok: boolean = false;
  public useredit = false;
  public addressedit = false;
  public authAccount: AuthAccount = new AuthAccountObj();
  public initDataProfile: AuthAccount = new AuthAccountObj();

  constructor(
      public crud: CrudService,
      public auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        console.log(v);
        this.userId = v._id;
        this.initDataProfile = v;
        this.authAccount = Object.assign({}, v)
      }
    });
  }

  editUser() {
    this.useredit = !this.useredit;
  }

  editAddress() {
    this.addressedit = !this.addressedit;
  }

  validate() {
    let isTrue = false;
    for (let key in this.authAccount){
      if (this.initDataProfile[key] !== this.authAccount[key]) isTrue = true
    }
    return isTrue
  }

  btnBlok(is) {
    this.isBlok = is
  }
  formCheck() {
    this.btnBlok(this.validate())
  }
  userSubmit() {
    this.crud.post('client', this.authAccount, this.userId ).then( ( v: any ) => {
      this.userId = v._id;
      this.initDataProfile = v;
      this.authAccount = Object.assign({}, v);
      this.useredit = false;
      this.addressedit = false;
      this.auth.setUser(v);
    }).catch(e => {

    });
  }
  addressSubmit() {
      this.crud.post('client', this.authAccount, this.userId ).then( ( v: any ) => {
          this.userId = v._id;
          this.initDataProfile = v;
          this.authAccount = Object.assign({}, v);
          this.useredit = false;
          this.addressedit = false;
          this.auth.setUser(v);
      }).catch(e => {

      });
  }
}
