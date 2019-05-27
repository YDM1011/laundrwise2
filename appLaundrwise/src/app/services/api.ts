import {Injectable} from '@angular/core';
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
    public global: any = {};
    constructor(
        public http: HttpClient,
        public router: Router) {
    }

    public get(path) {
        return new Promise((resolve, reject) => {
            resolve(this.global[path]);
            // this.http.get(`${path}`)
            //     .subscribe(
            //         (res: any) => {
            //             resolve(res);
            //         },
            //         err => reject(err)
            //     );
        });
    }

    public post(path: string, body: any) {
        return new Promise((resolve, reject) => {
            this.global[path] = body;
            resolve(this.global[path]);
            // this.http.post(`${path}`, body)
            //     .subscribe(
            //         (res: any) => {
            //             resolve(this.global[path] = body);
            //         },
            //         err => reject(err)
            //     );
        });
    }

    public put(path: string, body: any) {
        return new Promise((resolve, reject) => {
            this.global[path] = body;
            // this.http.put(`${path}`, body)
            //     .subscribe(
            //         (res: any) => {
            //             resolve(res);
            //         },
            //         err => reject(err)
            //     );
        });
    }

    public delete(path: string) {
        return new Promise((resolve, reject) => {
            this.http.delete(`${path}`)
                .subscribe(
                    (res: any) => {
                        resolve(res);
                    },
                    err => reject(err)
                );
        });
    }
}
