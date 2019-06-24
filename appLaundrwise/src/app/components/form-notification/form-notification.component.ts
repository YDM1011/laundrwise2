import {Component, Input, OnInit} from '@angular/core';
import {FormNotification, FormNotificationObj} from './form-notification';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {CrudService} from '../../crud.service';
import Swal from 'sweetalert2';
import {AuthService} from '../../auth.service';

export class MyErrorStateMatcher2 implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.scss']
})
export class FormNotificationComponent implements OnInit {
  matcher = new MyErrorStateMatcher2();
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required]);
  mobileFormControl = new FormControl('', [Validators.required]);
  mesFormControl = new FormControl('', [Validators.required]);
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() entity: string = '';

  public form: FormNotification = new FormNotificationObj();

  constructor(
      private auth: AuthService,
      private crud: CrudService
  ) { }

  ngOnInit() {
      this.auth.onUpDate.subscribe(( v: any ) => {
          if (v) {
            this.form = new FormNotificationObj(v);
            this.form.entity = this.entity;
          }
      });
  }

  getFormData() {
    if (!this.entity) return false;
    return this.form;
  }

  formSend() {
    let obj = this.getFormData();
    if (!obj) return Swal.fire('Something broken', '', 'error');
    this.crud.post('adminNotification', obj).then((value) => {
        Swal.fire('Success', 'Message sended', 'success');
        this.formClear();
    });
  }

  formClear() {
      this.form.mes = '';
  }

}
