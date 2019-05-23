import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {empty, Observable, Subject} from 'rxjs';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/observable/empty';
import 'rxjs-compat/add/operator/finally';
import {catchError} from 'rxjs/operators';
import {AuthentificationService} from './authentication.service';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    URL = environment;
    refreshTokenInProgress = false;

    tokenRefreshedSource = new Subject();
    tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

    constructor(private authService: AuthentificationService) {
    }

    static addAuthHeader(request) {
        const authHeader = localStorage.getItem('token');
        if (authHeader) {
            return request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authHeader}`
                }
            });
        }
        return request;
    }

    refreshToken(error, request) {
        if (this.refreshTokenInProgress) {
            if (error.status === 401 && request.url === this.URL + 'refresh-token/') {
                this.authService.logout();
            } else {
                return new Observable(observer => {
                    this.tokenRefreshed$.subscribe(() => {
                        observer.next();
                        observer.complete();
                    });
                });
            }
        } else {
            this.refreshTokenInProgress = true;
            return this.authService.refreshToken()
                .do(() => {
                    this.refreshTokenInProgress = false;
                    this.tokenRefreshedSource.next();
                });
        }
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request).pipe(catchError((error) => {
            if (error.status === 401) {
                return this.refreshToken(error, request)
                    .switchMap(() => {
                        request = AuthInterceptor.addAuthHeader(request);
                        return next.handle(request);
                    }).pipe(catchError(() => {
                        return empty();
                    }));
            }
        })).finally(() => {
        });
    }
}
