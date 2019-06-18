import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private cookie: CookieService) { }

    // intercept request and add token
    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

        // modify request
        request = request.clone({
            setHeaders: {
                Authorization:'Bearer ' + this.cookie.get('sid')
            },
            withCredentials: true
        });


        return next.handle(request)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {

                        // http response status code
                    }
                }, error => {
                    // http response status code

                })
            );

    }


}
