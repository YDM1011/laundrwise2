import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../services';
import {UserModel} from '../../../models';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    userForRegister: UserModel = new UserModel();
    constructor(private authServices: AuthentificationService) {
    }

    ngOnInit() {
    }


    signUp(userForRegister) {
        this.authServices.signUp(userForRegister).then((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }


}
