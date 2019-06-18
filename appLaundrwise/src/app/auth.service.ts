import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }
  isAuth() {
    if (this.cookieService.get('userId')) {
      return true;
    } else {
      return false;
    }
  }
}
