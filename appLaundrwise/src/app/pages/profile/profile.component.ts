import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {CrudService} from "../../crud.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public userName: string;
    constructor(
        private auth: AuthService,
        private crud: CrudService
    ) {

    }

    ngOnInit() {
        // this.crud.get('me').then(v => {
        //     this.userName = Object(v).firstName + ' ' + Object(v).lastName;
        // }).catch(e => {});
        this.auth.onUpDate.subscribe(( v: any ) => {
            if (v) {
                this.userName = Object(v).firstName + ' ' + Object(v).lastName;
            }
        });
    }
}
