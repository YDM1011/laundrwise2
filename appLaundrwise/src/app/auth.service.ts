import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private updat = new BehaviorSubject<any>(null);
    public onUpDate = this.updat.asObservable();

  private step = new BehaviorSubject<number>(0);
  public getStep = this.step.asObservable();

  private basketGroup = new BehaviorSubject<any>(null);
  public getBasketGroup = this.basketGroup.asObservable();

  constructor(private cookieService: CookieService) { }
  isAuth() {
    if (this.cookieService.get('userId')) {
      return true;
    } else {
      return false;
    }
  }
  isAuthAdmin() {
    if (this.cookieService.get('adminId')) {
      return true;
    } else {
      return false;
    }
  }

  setUser(data) {
    this.updat.next(data);
  }
  setStep(data) {
    this.step.next(data);
  }
  setBasketGroup(data) {
    this.basketGroup.next(data);
  }
}
