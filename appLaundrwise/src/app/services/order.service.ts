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
import {ApiService} from './api';

@Injectable()
export class OrderService implements OnInit {
    public config = environment;
    public URL = environment;
    public headers: HttpHeaders = new HttpHeaders();

    constructor(
        public http: HttpClient,
        public router: Router,
        private api: ApiService
    ) {
    }

    public ngOnInit() {
        this.headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-type': 'application/json'
        });
    }


    public createOrder(order) {
        return this.api.post('./assets/user.json', order);
    }
    public getAllUserOrders() {
        return this.api.get('./assets/user.json');
    }
    public getOrder() {
        return this.api.get('./assets/user.json');
    }
}
