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

    ngOnInit() {
    }

    register(user) {
        this.authServices.registration(user).subscribe((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }


    login(user) {
        this.authServices.login(user).subscribe((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }
}
