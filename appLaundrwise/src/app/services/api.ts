import {Injectable, OnInit} from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

    public headers: HttpHeaders = new HttpHeaders();
    public config = environment;

    constructor(
        public http: HttpClient,
        public router: Router) {}
    public get(api) {
        return new Promise((resolve, reject) => {
            this.http.get(`${api}`)
                .subscribe(
                    (res: any) => {
                        resolve(res);
                    },
                    err => reject(err)
                );
        });
    }
    public post(api: string, body: any ) {
        return new Promise((resolve, reject) => {
            this.http.post(`${api}`, body)
                .subscribe(
                    (res: any) => {
                        resolve(res);
                    },
                    err => reject(err)
                );
        });
    }

    public put(api: string, body: any ) {
        return new Promise((resolve, reject) => {
            this.http.put(`${api}`, body)
                .subscribe(
                    (res: any) => {
                        resolve(res);
                    },
                    err => reject(err)
                );
        });
    }

    public delete(api: string) {
        return new Promise((resolve, reject) => {
            this.http.delete(`${api}`)
                .subscribe(
                    (res: any) => {
                        resolve(res);
                    },
                    err => reject(err)
                );
        });
    }
}
