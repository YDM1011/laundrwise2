import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogoutGuard implements CanActivate {
  constructor(
      private router: Router,
      private auth: AuthService
  ) { }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) {
    if (this.auth.isAuth()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }

  }
}



