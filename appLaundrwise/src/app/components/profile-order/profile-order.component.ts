import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../crud.service";
import {WS} from "../../websocket/websocket.events";
import {WebsocketService} from "../../websocket";
import {AuthService} from "../../auth.service";

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
      private wsService: WebsocketService,
      private auth: AuthService
  ) {}

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
      this.crud.post('basket', obj, this.obj._id, false, false).then((v: any) => {
        if (v) {
          this.obj['status'] = 2;
          this.obj['managerDeliveryOwner'] = this.managerChoose;
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.managerChoose, { data: this.obj });
          this.openModal();
        }
      });
    }
    if (this.role === 'superManagerCleaner') {
      obj['status'] = 2;
      obj['managerCleanerOwner'] = this.managerChoose;
      this.crud.post('basket', obj, this.obj._id, false, false).then((v: any) => {
        if (v) {
          this.auth.setUpdateCount('');
          this.obj['status'] = 2;
          this.openModal();
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.managerChoose, { data: this.obj });
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.createdBy.itemId, { data: this.obj });
        }
      });
    }
  }
  assigneToSuperDelivery() {
    if (this.deliverySuperChoose) {
      this.crud.post('basket', {deliveryOwner: this.delivery[this.deliverySuperChoose]._id, status: 2}, this.obj._id, false, false).then((v: any) => {
        if (v) {
          this.obj['deliveryOwner'] = this.delivery[this.deliverySuperChoose]._id;
          this.obj['status'] = 2;
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.delivery[this.deliverySuperChoose].superManager,  { data: this.obj });
          this.openModalSuperDelivery();
        }
      });
    }
  }
  inprogressStatus() {
    this.crud.post('basket', {status: 3}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 3;
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.createdBy.itemId, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.cleanerOwner.superManager, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.managerDeliveryOwner, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.deliveryOwner.superManager, { data: this.obj });
      }
    });
  }
  washedOrder() {
    this.crud.post('basket', {status: 4}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 4;
        if (this.obj.managerDeliveryOwner) {
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.managerDeliveryOwner, { data: this.obj });
        }
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.createdBy.itemId, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.cleanerOwner.superManager, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.deliveryOwner.superManager, { data: this.obj });
      }
    });
  }
  doneOrder() {
    this.crud.post('basket', {status: 5}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 5;
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.createdBy.itemId, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.cleanerOwner.superManager, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.managerDeliveryOwner, { data: this.obj });
        this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.deliveryOwner.superManager, { data: this.obj });
      }
    });
  }
  cancelOrder() {
    this.crud.post('basket', {status: 6}, this.obj._id, false, false).then((v: any) => {
      if (v) {
        this.obj['status'] = 6;
        if (this.obj.createdBy.itemId) {
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.createdBy.itemId, { data: this.obj });
        }
        if (this.obj.managerCleanerOwner) {
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.managerCleanerOwner, { data: this.obj });
        }
        if (this.obj.managerDeliveryOwner) {
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.managerDeliveryOwner, { data: this.obj });
        }
        if (this.obj.deliveryOwner && this.obj.deliveryOwner.superManager) {
          this.wsService.send(WS.SEND.CONFIRM_ORDER, this.obj.deliveryOwner.superManager, { data: this.obj });
        }
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
