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
      managerCleanerOwner: this.managerChoose
    };
    this.crud.post('basket', obj, this.obj._id, false, false).then((v: any) => {
      this.openModal();
      this.obj = null;
    });
  }
  assigneToSuperDelivery() {
    this.crud.post('basket', {deliveryOwner: this.deliverySuperChoose, status: 2}, this.obj._id, false, false).then((v: any) => {
      this.wsService.send(WS.SEND.CONFIRM_ORDER, this.deliverySuperChoose,  { data: this.obj._id });
      this.openModalSuperDelivery();
    });
  }
  openModal() {
    this.modal = !this.modal;
  }
  openModalSuperDelivery() {
    this.modalSuperDelivery = !this.modalSuperDelivery;
  }
}
