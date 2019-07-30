import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../../crud.service";
import {AuthService} from "../../../../auth.service";
import {WS} from "../../../../websocket/websocket.events";
import {WebsocketService} from "../../../../websocket";

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  public notification$;
  public user;
  public cleaner: any;
  public allOrdersSuperManager: any = [];
  public allOrdersSuperDelivery: any = [];
  public loading: boolean = false;
  constructor(
      private crud: CrudService,
      private auth: AuthService,
      private wsService: WebsocketService
  ) { }

  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        if (this.user.role === 'superManagerCleaner') {
          const populate = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((cleaner: any) => {
            this.cleaner = cleaner[0];
            if (cleaner[0]) {
              const populate1 = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
              const query1 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: 5});
              this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}&skip=0&limit=8&sort={"updatedAt": "-1"}`).then((basket: any) => {
                this.allOrdersSuperManager = basket;
                this.loading = true;
              });
            }
          });
          this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
          this.notification$.subscribe( v => {
            const Basket = JSON.parse(v).data.data;
            this.auth.setUpdateCount('');
            const newArray = [];
            newArray.push(Basket);
            this.allOrdersSuperManager = newArray.concat(this.allOrdersSuperManager);
          });
        }
        if (this.user.role === 'superManagerDelivery') {
          const populate = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`delivery?query=${query}&populate=${populate}`).then((cleaner: any) => {
            this.cleaner = cleaner[0];
            if (cleaner[0]) {
              const populate1 = JSON.stringify([{path: 'deliveryOwner', select: 'name superManager'}, {path: 'products'}, {path: 'cleanerOwner', select: 'name superManager'}]);
              const query1 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 5});
              this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}&skip=0&limit=8&sort={"updatedAt": "-1"}`).then((basket: any) => {
                this.allOrdersSuperDelivery = basket;
                this.loading = true;
              });
            }
          });
          this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
          this.notification$.subscribe( v => {
            const Basket = JSON.parse(v).data.data;
            this.auth.setUpdateCount('');
            const newArray = [];
            newArray.push(Basket);
            this.allOrdersSuperDelivery = newArray.concat(this.allOrdersSuperDelivery);
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
