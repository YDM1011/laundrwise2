import {of as observableOf, throwError as observableThrowError} from 'rxjs';

import {tap, catchError} from 'rxjs/operators';
import {Injectable, OnInit} from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {Router} from '@angular/router';

import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/observable/of';
import {environment} from '../../environments/environment';

@Injectable()
export class ProfileService implements OnInit {
    public config = environment;
    public URL = environment;
    public headers: HttpHeaders = new HttpHeaders();

    constructor(
        public http: HttpClient,
        public router: Router
    ) {
    }

    public ngOnInit() {
        this.headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-type': 'application/json'
        });
    }


    public getProfile() {
        return this.http.get('assets/user.json',
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }
    public editProfile(user) {
        return this.http.post('assets/user.json', user ,
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }
    public messageToAdmin(objectUser) {
        return this.http.post('assets/user.json', objectUser ,
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }
}
