import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public userName: string;
    public user: any;
    constructor(
        private auth: AuthService
    ) {}

    ngOnInit() {
        this.auth.onUpDate.subscribe(( v: any ) => {
            if (v) {
                this.user = v;
                console.log(this.user.role);
                this.userName = Object(v).firstName + ' ' + Object(v).lastName;
            }
        });
    }
}
