import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {CrudService} from '../../../crud.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from '../../../auth.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
export class MyErrorStateMatcher2 implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public cityandcountry:any;
  myForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  matcher2 = new MyErrorStateMatcher2();
  constructor(  private router: Router,
                private api: CrudService,
                private cookieService: CookieService,
                private auth: AuthService,
                private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      passwordFormControl: ['', [Validators.required]],
      password2FormControl: ['']
    }, { validator: this.veryfyPass });
  }
  firstNameFormControl = new FormControl('', [
    Validators.required
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  countryFormControl = new FormControl('', [
    Validators.required
  ]);
  cityFormControl = new FormControl('', [
    Validators.required
  ]);
  addressFormControl = new FormControl('', [
    Validators.required
  ]);
  address2FormControl = new FormControl('', [
  ]);

  ngOnInit() {
  }
  veryfyPass(group: FormGroup) {
    const pass = group.controls.passwordFormControl.value;
    const confirmPass = group.controls.password2FormControl.value;
    return pass === confirmPass ? null : { notSame: true };
  }
  countryChange(e) {
    if (e) {
      this.cityandcountry = e;
      console.log(this.cityandcountry);
    }
  }
  signUp(e) {
    e.preventDefault();
    const apiUrl = 'signup';
    const signup = {
      firstName: this.firstNameFormControl.value,
      lastName: this.lastNameFormControl.value,
      login: this.emailFormControl.value,
      email: this.emailFormControl.value,
      mobile: this.phoneFormControl.value,
      address1: this.addressFormControl.value,
      address2: this.address2FormControl.value,
      country: this.cityandcountry.country,
      city: this.cityandcountry.city,
      pass: this.myForm.value.passwordFormControl,
      role: 'client',
    };

    this.api.post(apiUrl, signup).then((value: any) => {
          console.log(value);
          this.cookieService.set('token', value.token);
          this.cookieService.set('userId', value.userId);
          this.auth.isAuth();
          this.router.navigate(['/']);
        },
        (error) => {

        }).catch(error => {});
  }

}
