import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../crud.service";
import {WS} from "../../websocket/websocket.events";
import {WebsocketService} from "../../websocket";

@Component({
  selector: 'app-profile-order',
  templateUrl: './profile-order.component.html',
  styleUrls: ['./profile-order.component.scss']
})
export class ProfileOrderComponent implements OnInit {
  @Input() obj;
  @Input() cleaner;
  @Input() role;
  @Input() delivery;
  public managerChoose: string;
  public deliverySuperChoose: string;
  public modal: boolean =  false;
  public modalSuperDelivery: boolean =  false;
  constructor(
      private crud: CrudService,
      private wsService: WebsocketService
  ) { }

  ngOnInit() {
  }
  assigneToManager() {
    const obj = {
      status: 2,
      managerDeliveryOwner: null,
    };
    if (this.role === 'superManagerDelivery') {
      obj['status'] = 2;
      obj['managerDeliveryOwner'] = this.managerChoose;
    }
    if (this.role === 'superManagerCleaner') {
      obj['status'] = 2;
      obj['managerCleanerOwner'] = this.managerChoose;
    }
    this.crud.post('basket', obj, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 2;
        this.openModal();
        if (this.role === 'superManagerDelivery') {
          this.obj['managerDeliveryOwner'] = this.managerChoose;
        }
      }
    });
  }
  assigneToSuperDelivery() {
    if(this.deliverySuperChoose) {
      this.crud.post('basket', {deliveryOwner: this.delivery[this.deliverySuperChoose]._id, status: 2}, this.obj._id, false, false).then((v: any) => {
        if (v) {
          this.obj['deliveryOwner'] = this.delivery[this.deliverySuperChoose]._id;
          this.obj['status'] = 2;
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.delivery[this.deliverySuperChoose].superManager,  { data: this.obj._id });
          this.openModalSuperDelivery();
        }
      });
    }
  }
  inprogressStatus() {
    this.crud.post('basket', {status: 3}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 3;
      }
    });
  }
  washedOrder() {
    this.crud.post('basket', {status: 4}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 4;
      }
    });
  }
  doneOrder() {
    const money = this.cleaner.money + this.obj.totalPrice;
    this.crud.post('basket', {status: 5}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 5;
        this.crud.post('cleaner', {money: money}, this.cleaner._id, false, false).then((v: any) => {
          this.cleaner.money = money;
        });
      }
    });
  }
  cancelOrder() {
    this.crud.post('basket', {status: 6}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 6;
      }
    });
  }
  openModal() {
    this.modal = !this.modal;
  }
  openModalSuperDelivery() {
    this.modalSuperDelivery = !this.modalSuperDelivery;
  }
}
