import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services';
import {UserModel} from '../../models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private authServices: AuthentificationService) {
    }

    userForRegister: UserModel = new UserModel();
    userForLogin: UserModel = new UserModel();

    ngOnInit() {}

    signUp(userForRegister) {
        this.authServices.signUp(userForRegister).then((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }


    signIn(userForLogin) {
        if (userForLogin.password && userForLogin.email) {
            this.authServices.signIn(userForLogin).then((data: any) => {
                    console.log(data);
                    localStorage.setItem('token', 'testToken');
                },
                (error) => {
                    console.log(error);
                });
        }
    }
}
