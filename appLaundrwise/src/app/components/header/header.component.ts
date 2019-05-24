import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services';
import {UserModel} from '../../models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: UserModel = new UserModel();

    constructor(private authServices: AuthentificationService) {
    }

    ngOnInit() {}

    signUp(user) {
        this.authServices.signUp(user).subscribe((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }


    signIn(user) {
        this.authServices.signIn(user).subscribe((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }
}
