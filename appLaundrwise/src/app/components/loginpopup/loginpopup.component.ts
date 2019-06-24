import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher, MatDialogRef} from '@angular/material';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CrudService} from '../../crud.service';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from '../../auth.service';
import {Location} from '@angular/common';

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
    this.dialogRef.close();
  }
  signin(e) {
    e.preventDefault();
    const signin = {
      login: this.emailFormControl.value,
      email: this.emailFormControl.value,
      pass: this.passwordFormControl.value,
    };
    this.api.post('signin', signin).then((value: any) => {
          this.dialogRef.close();
          if (this.auth.isAuth()) {
              this.router.navigate(['/profile']);
          }
          this.auth.setUser(value.user);
        },
        (error) => {

        }).catch(error => {});
  }

}
