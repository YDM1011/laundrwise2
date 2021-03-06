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

  private updateSuperManager = new BehaviorSubject<any>(false);
  public onUpdateSuperManager = this.updateSuperManager.asObservable();

  private updateCount = new BehaviorSubject<any>(false);
  public onUpdateCount = this.updateCount.asObservable();

  public localStorage = localStorage ;

  constructor(private cookieService: CookieService) { }
  isAuth() {
    if (this.cookieService.get('userId') || this.localStorage.getItem('userId')) {
      return true;
    } else {
      return false;
    }
  }
  isAuthAdmin() {
    if (this.cookieService.get('adminId') || this.localStorage.getItem('adminId')) {
      return true;
    } else {
      return false;
    }
  }

  setUpdateCount(data) {
    this.updateCount.next(data);
  }
  updateSuper(data) {
    this.updateSuperManager.next(data);
  }
  totalUpdate(data) {
    this.updateTotalPrice.next(data);
  }
  setUser(data) {
    this.updat.next(data);
  }
  setAuthUser(id, token) {
    this.localStorage.setItem('userId', id);
    this.localStorage.setItem('token', token);
  }
  setLogoutUser(){
    this.localStorage.removeItem('userId');
    this.localStorage.removeItem('token');
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
