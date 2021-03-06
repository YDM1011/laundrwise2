import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {CrudService} from "../../crud.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public date =  new Date().getFullYear();
  public info: any;
  public subscribed: boolean = false;
  public email: string = '';
  constructor(
      private auth: AuthService,
      private crud: CrudService,
  ) { }
  ngOnInit() {
    this.auth.onSettings.subscribe((v: any) => {
      if (!v) return;
      this.info = v;
    });
  }
  subscribe() {
    if (!this.email.match('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,4})+$')) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Fill field email to subscribe for out news'
      });
    } else {
        this.crud.post('subscriber', {email:this.email}).then(v => {
            Swal.fire({
                type: 'success',
                title: 'Subscribed',
                text: ''
            });
          this.subscribed = true;
        });
        this.email = '';
    }
  }
}
