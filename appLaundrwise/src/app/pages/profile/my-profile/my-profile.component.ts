import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../../auth.service";
import {CrudService} from "../../../crud.service";
import {Router} from "@angular/router";
import {WebsocketService} from "../../../websocket";
import {WS} from "../../../websocket/websocket.events";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, OnChanges {
  public notification$;
  public user: any;
  public cleaner: any;
  public allOrdersUser: any = [];
  public allOrdersSuperManager: any = [];
  public allOrdersSuperDelivery: any = [];
  public allOrdersManager: any = [];
  public managers: any = [];
  public allDelivery: any = [];
  public countOrders = {
    all: 0,
    new: 0,
    waiting: 0,
    done: 0
  };
  public loading: boolean = false;
  constructor(
      private auth: AuthService,
      private crud: CrudService,
      private router: Router,
      private wsService: WebsocketService
  ) { }
  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        if (this.user.role === 'client' || !this.user.role) {
          const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
          const query = JSON.stringify({'createdBy.itemId': this.user._id, cleanerOwner: { $exists: true }, status: {$ne: 0}});
          this.crud.getNoCache(`basket?query=${query}&populate=${populate}&skip=0&limit=8&sort={"date": "-1"}`).then((v: any) => {
            this.allOrdersUser = v;
            this.loading = true;
          });
          this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
          this.notification$.subscribe(v => {
            const newBasket = JSON.parse(v).data.data;
            const index = this.crud.find('_id', newBasket._id, this.allOrdersUser);
            if (typeof index === 'number') {
              this.allOrdersUser[index] = newBasket;
              this.allOrdersUser = Object.assign([], this.allOrdersUser);
            }
          });
        }
        if (this.user.role === 'superManagerCleaner') {
          this.auth.onUpdateCount.subscribe((v: any) => {
            if (this.cleaner) {
              this.getCount(this.cleaner._id, 'cleanerOwner');
            }
          });
          const populate = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((cleaner: any) => {
            this.cleaner = cleaner[0];
            this.getCount(this.cleaner._id, 'cleanerOwner');
            this.getDelivery();
            this.loading = true;
          });
        }
        if (this.user.role === 'superManagerDelivery') {
          this.auth.onUpdateCount.subscribe((v: any) => {
            if (this.cleaner) {
              this.getCount(this.cleaner._id, 'deliveryOwner');
            }
          });
          const populate = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`delivery?query=${query}&populate=${populate}`).then((delivery: any) => {
            this.cleaner = delivery[0];
            this.getCount(this.cleaner._id, 'deliveryOwner');
            this.loading = true;
          });
        }
        if (this.user.role === 'managerCleaner' && this.user.loger) {
          const populate = JSON.stringify({path: 'orders', options: {skip: 0, limit: 8, sort: {updatedAt: -1}}, populate: [{path: 'products'}, {path: 'cleanerOwner', select: 'name superManager'}, {path: 'deliveryOwner', select: 'name superManager'}]});
          this.crud.getNoCache(`actionLog/${this.user.loger}?populate=${populate}`).then((log: any) => {
            this.allOrdersManager = log.orders;
            this.crud.getNoCache('cleaner/' + log.cleaner).then((v: any) => {
              this.cleaner = v;
              this.loading = true;
              this.getDelivery();
            });
          });
          this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
          this.notification$.subscribe(v => {
            const basket = JSON.parse(v).data.data;
            const index = this.crud.find('_id', basket._id, this.allOrdersManager);
            if (typeof index === 'number') {
              this.allOrdersManager[index] = basket;
              this.allOrdersManager = Object.assign([], this.allOrdersManager);
            } else {
              const newArray = [];
              newArray.push(basket);
              this.allOrdersManager = newArray.concat(this.allOrdersManager);
            }
          });
        }
        if (this.user.role === 'managerDelivery' && this.user.loger) {
          const populate = JSON.stringify({path: 'orders', options: {skip: 0, limit: 8, sort: {date: -1}}, populate: [{path: 'products'}, {path: 'cleanerOwner', select: 'name'}, {path: 'deliveryOwner', select: 'name superManager'}]});
          this.crud.getNoCache(`actionLog/${this.user.loger}?populate=${populate}`).then((log: any) => {
            this.allOrdersManager = log.orders;
            this.crud.getNoCache('delivery/' + log.delivery).then((v: any) => {
              this.cleaner = v;
              this.loading = true;
              this.getDelivery();
            });
          });
          this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
          this.notification$.subscribe(v => {
            const basket = JSON.parse(v).data.data;
            const index = this.crud.find('_id', basket._id, this.allOrdersManager);
            if (typeof index === 'number') {
              this.allOrdersManager[index] = basket;
              this.allOrdersManager = Object.assign([], this.allOrdersManager);
            } else {
              const newArray = [];
              newArray.push(basket);
              this.allOrdersManager = newArray.concat(this.allOrdersManager);
            }
          });
        }
      }
    });
  }
  ngOnChanges() {
  }
  getDelivery() {
    this.crud.getNoCache('delivery').then((v: any) => {
      this.allDelivery = v;
    });
  }
  getCount(id, who) {
    this.crud.getNoCache(`basket/count?query={"${who}":"${id}"}&select=_id`).then((v: any) => {
      this.countOrders['all'] = v.count;
    });
    if (this.user.role === 'superManagerCleaner') {
      this.crud.getNoCache(`basket/count?query={"${who}":"${id}", "status": "1"}&select=_id`).then((v: any) => {
        this.countOrders['new'] = v.count;
      });
    }
    if (this.user.role === 'superManagerDelivery') {
      this.crud.getNoCache(`basket/count?query={"${who}":"${id}", "status": "2"}&select=_id`).then((v: any) => {
        this.countOrders['new'] = v.count;
      });
    }
    if (this.user.role === 'superManagerCleaner') {
      const obj = {$or: [{status: 2}, {status: 3}, {status: 4}]};
      obj[who] = id;
      const queryWaiting = JSON.stringify(obj);
      this.crud.getNoCache(`basket/count?query=${queryWaiting}`).then((v: any) => {
        this.countOrders['waiting'] = v.count;
      });
    }
    if (this.user.role === 'superManagerDelivery') {
      const obj = {$or: [{status: 3}, {status: 4}]};
      obj[who] = id;
      const queryWaiting = JSON.stringify(obj);
      this.crud.getNoCache(`basket/count?query=${queryWaiting}`).then((v: any) => {
        this.countOrders['waiting'] = v.count;
      });
    }
    this.crud.getNoCache(`basket/count?query={"${who}":"${id}", "status":"5"}&select=_id`).then((v: any) => {
      this.countOrders['done'] = v.count;
    });
  }
  getOutput(value) {
    if (this.user.role === 'client') {
      this.allOrdersUser = this.allOrdersUser.concat(value);
    }
    if (this.user.role === 'managerCleaner' || this.user.role === 'managerDelivery') {
      this.allOrdersManager = this.allOrdersManager.concat(value.orders);
    }

  }
}
