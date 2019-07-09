import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public user: any;
  constructor( private auth: AuthService) { }
  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
      }
    });
  }


}
