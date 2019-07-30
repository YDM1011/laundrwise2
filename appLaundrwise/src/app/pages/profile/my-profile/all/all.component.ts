import {Component, ElementRef, OnInit} from '@angular/core';
import {CrudService} from "../../../../crud.service";
import {AuthService} from "../../../../auth.service";
import {WS} from "../../../../websocket/websocket.events";
import {WebsocketService} from "../../../../websocket";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  public notification$: any;
  public updateNotificationList: any;
  public user;
  public cleaner: any;
  public allOrdersSuperManager: any = [];
  public allOrdersSuperDelivery: any = [];
  public loading: boolean = false;
  public elem: ElementRef;
  public scroll;
  public triger: boolean = true;
  constructor(
      private crud: CrudService,
      private auth: AuthService,
      private wsService: WebsocketService,
      private el: ElementRef
  ) {
    this.elem = el;
  }
  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        if (this.user.role === 'superManagerDelivery') {
          this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
          this.notification$.subscribe(v => {
            const idBasket = JSON.parse(v).data.data;
            const populate3 = JSON.stringify([{path: 'deliveryOwner', select: 'name superManager'}, {path: 'products'}, {path: 'cleanerOwner', select: 'name'}]);
            this.crud.getNoCache(`basket?query={"_id":"${idBasket}"}&populate=${populate3}`).then((newBasket: any) => {
              const newArray = [];
              newArray.push(newBasket[0]);
              this.allOrdersSuperDelivery = newArray.concat(this.allOrdersSuperDelivery);
            });
          });
          const populate = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`delivery?query=${query}&populate=${populate}`).then((cleaner: any) => {
            this.cleaner = cleaner[0];
            if (cleaner[0]) {
              const populate1 = JSON.stringify([{path: 'deliveryOwner', select: 'name superManager'}, {path: 'products'}, {path: 'cleanerOwner', select: 'name'}]);
              const query1 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: {$ne: 0}});
              this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}&skip=0&limit=8&sort={"date": "-1"}`).then((basket: any) => {
                this.allOrdersSuperDelivery = basket;
                this.loading = true;
              });
            }
          });
        }
        if (this.user.role === 'superManagerCleaner') {
          this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
          this.notification$.subscribe(v => {
            const idBasket = JSON.parse(v).data.data;
            const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
            this.crud.getNoCache(`basket?query={"_id":"${idBasket}"}&populate=${populate}`).then((newBasket: any) => {
              const newArray = [];
              newArray.push(newBasket[0]);
              this.allOrdersSuperManager = newArray.concat(this.allOrdersSuperManager);
            });
          });
          const populate2 = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`cleaner?query=${query}&populate=${populate2}`).then((cleaner: any) => {
            this.cleaner = cleaner[0];
            if (cleaner[0]) {
              const populate1 = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
              const query1 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: {$ne: 0}});
              this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}&skip=0&limit=8&sort={"date": "-1"}`).then((basket: any) => {
                this.allOrdersSuperManager = basket;
                this.loading = true;
              });
            }
          });
        }
      }
    });
  }
  getOutput(value) {
    if (this.user.role === 'superManagerCleaner' && (value && value.length > 0)) {
      this.allOrdersSuperManager = this.allOrdersSuperManager.concat(value);
    }
    if (this.user.role === 'superManagerDelivery' && (value && value.length > 0)) {
      this.allOrdersSuperDelivery = this.allOrdersSuperDelivery.concat(value);
    }
  }
}
