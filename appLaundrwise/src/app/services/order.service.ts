import {throwError as observableThrowError} from 'rxjs';

import {catchError} from 'rxjs/operators';
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
export class OrderService implements OnInit {
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


    public createOrder(order) {
        return this.http.post('assets/user.json', order,
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }
    public getAllUserOrders() {
        return this.http.get('assets/user.json',
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }
    public getOrder() {
        return this.http.get('assets/user.json',
            {headers: this.headers, withCredentials: false}).pipe(
            catchError((error: any) => {
                return observableThrowError(error);
            }));
    }
}
