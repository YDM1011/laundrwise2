import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CrudService} from '../../crud.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from '../../auth.service';
import {Location} from '@angular/common';
import {reject} from "q";

export class MyErrorStateMatcher2 implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrls: ['./loginpopup.component.scss']
})
export class LoginpopupComponent implements OnInit {

  myForm: FormGroup;
  matcher2 = new MyErrorStateMatcher2();
  constructor(
      private router: Router,
      private api: CrudService,
      private cookieService: CookieService,
      private auth: AuthService,
      private location: Location,
      public dialogRef: MatDialogRef<LoginpopupComponent>
  ) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }
  closeDialog() {
    // this.location.back();
    this.dialogRef.close();
  }
  signin(e) {
    e.preventDefault();
    const apiUrl = 'signin';
    const signin = {
      login: this.emailFormControl.value,
      email: this.emailFormControl.value,
      pass: this.passwordFormControl.value,
    };
    this.api.post(apiUrl, signin).then((value: any) => {
          console.log(value);
          this.cookieService.set('token', value.token);
          this.cookieService.set('userId', value.userId);
          this.auth.isAuth();
          this.dialogRef.close();
          this.router.navigate(['/profile']);
        },
        (error) => {

        }).catch(error => {});
  }

}
