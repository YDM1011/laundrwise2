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

  public cleaner:any;
  public initCleaner:any;
  public isSMC: boolean = false;
  constructor(
      public crud: CrudService,
      public auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.userId = v._id;
        this.initDataProfile = v;
        this.authAccount = Object.assign({}, v);
        if (this.authAccount.role == 'superManagerCleaner' ){
            this.getCleaner(this.userId);
            this.isSMC = true
        } else {
            this.isSMC = false
        }
      }
    });
  }

  editUser() {
    this.useredit = !this.useredit;
  }

  editAddress() {
    this.addressedit = !this.addressedit;
  }

  // validate() {
  //   let isTrue = false;
  //   for (let key in this.authAccount) {
  //     if (this.initDataProfile[key] !== this.authAccount[key]) isTrue = true;
  //   }
  //   return isTrue;
  // }
  validate(def, initial) {
    let isTrue = false;
    for (let key in initial) {
      if (def[key] !== initial[key]) isTrue = true;
    }
    return isTrue;
  }

  btnBlok(is) {
    this.isBlok = is;
  }
  formCheck(def = this.initDataProfile, initial = this.authAccount) {
    this.btnBlok(this.validate(def, initial));
  }
  userSubmit() {
    this.crud.post('client', this.authAccount, this.userId ).then( ( v: any ) => {
      this.useredit = false;
      this.auth.setUser(v);
    }).catch(e => {

    });
  }
  addressSubmit() {
      this.crud.post('client', this.authAccount, this.userId ).then( ( v: any ) => {
          console.log(v)
          this.addressedit = false;
          this.auth.setUser(v);
      }).catch(e => {

      });
  }
  cleanerSubmit() {
      this.crud.post('cleaner', this.initCleaner, this.initCleaner._id ).then( ( v: any ) => {
          this.addressedit = false;
          this.cleaner = v;
          this.initCleaner = Object.assign({}, this.cleaner);
      }).catch(e => {

      });
  }

  getCleaner(managerId){
    let query = JSON.stringify({
        superManager: managerId
    });
    this.crud.getNoCache('cleaner', '', `?query=${query}`).then((v:any)=>{
      if(v){
        this.cleaner = v[0];
        this.initCleaner = Object.assign({}, this.cleaner);
      }
    })
  }
}
