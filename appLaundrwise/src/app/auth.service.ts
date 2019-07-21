import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private updateTotalPrice = new BehaviorSubject<any>(null);
  public onTotalPrice = this.updateTotalPrice.asObservable();

  private updat = new BehaviorSubject<any>(null);
  public onUpDate = this.updat.asObservable();

  private step = new BehaviorSubject<number>(0);
  public getStep = this.step.asObservable();

  private order = new BehaviorSubject<any>(null);
  public onOrderConfirm = this.order.asObservable()

  private cleaners = new BehaviorSubject<any>(null);
  public onCleaners = this.cleaners.asObservable();

  private basketGroup = new BehaviorSubject<any>(null);
  public getBasketGroup = this.basketGroup.asObservable();

  private settings = new BehaviorSubject<any>(null);
  public onSettings = this.settings.asObservable();

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

  totalUpdate(data) {
    this.updateTotalPrice.next(data);
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

  bascketOrder(order) {
      const obj = {
          basket: [],
          orderInfo: ''
      };
      order.baskets.map(basket => {
          obj.basket.push(basket);
      });
      obj.orderInfo = Object.assign({}, order.orderInfo);
      this.order.next( obj );
  }
  setCompany(data) {
    this.cleaners.next(data);
  }
  setSettings(data) {
      this.settings.next(data);
  }
}
