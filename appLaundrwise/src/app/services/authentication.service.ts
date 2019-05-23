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
export class AuthentificationService implements OnInit {
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


    public registration(registerUser) {
        return this.http.post('assets/user.json', registerUser,
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }

    public login(registerUser) {
        return this.http.post('assets/user.json', registerUser,
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }

    public refreshToken() {
        let respons;
        const token = localStorage.getItem('refreshToken');
        const tokenBody = '{' + '"refreshToken"' + ':' + '"' + token + '"' + '}';
        return this.http.post(this.URL + 'refresh-token/', tokenBody,
            {headers: this.headers, withCredentials: false}).pipe(tap(resp => {
                if (resp) {
                    respons = resp;
                    localStorage.setItem('token', respons.data.token);
                    localStorage.setItem('refreshToken', respons.data.refreshToken);
                    localStorage.setItem('wsToken', respons.data.wsToken);
                }
            }),
            catchError(error => {
                if (error) {
                    this.logout();
                }
                return observableOf(false);
            }));
    }

    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/']);
    }

}
