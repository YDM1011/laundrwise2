import {Injectable, OnInit} from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {Router} from '@angular/router';

import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/observable/of';
import {environment} from '../../environments/environment';
import {ApiService} from './api';

@Injectable()
export class ProfileService implements OnInit {
    public config = environment;
    public headers: HttpHeaders = new HttpHeaders();

    constructor(
        public http: HttpClient,
        public router: Router,
        private api: ApiService
    ) {}

    public ngOnInit() {
        this.headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-type': 'application/json'
        });
    }


    public getProfile() {
        return this.api.get('./assets/user.json');
    }
    public editProfile(user) {
        return this.api.post('./assets/user.json', user );
    }
    public messageToAdmin(objectUser) {
        return this.api.post('./assets/user.json', objectUser );
    }
}
