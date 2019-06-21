import {Component, OnInit} from '@angular/core';
import {AuthAccount, AuthAccountObj} from './auth-account';
import {CrudService} from '../../../crud.service';

@Component({
  selector: 'app-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public userId: number;
  public useredit = false;
  public addressedit = false;
  public AuthAccount: AuthAccount = new AuthAccountObj();

  constructor(
      public crud: CrudService
  ) {}

  ngOnInit() {
    this.crud.get('me').then(v => {
      this.userId = Object(v)._id;
      this.AuthAccount.firstName = Object(v).firstName;
      this.AuthAccount.lastName = Object(v).lastName;
      this.AuthAccount.mobile = Object(v).mobile;
      this.AuthAccount.email = Object(v).email;
      this.AuthAccount.country = Object(v).country;
      this.AuthAccount.city = Object(v).city;
      this.AuthAccount.address1 = Object(v).address1;
      this.AuthAccount.address2 = Object(v).address2;
    }).catch(e => {});
  }

  editUser() {
    this.useredit = !this.useredit;
  }

  editAddress() {
    this.addressedit = !this.addressedit;
  }

  userSubmit() {
    this.crud.post('Client', this.AuthAccount, this.userId ).then( ( value: any ) => {
    }).catch(e => {
    });
  }
  addressSubmit() {

  }
}
