import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../auth.service';
import {Router} from "@angular/router";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-new-orders-step-two',
  templateUrl: './new-orders-step-two.component.html',
  styleUrls: ['./new-orders-step-two.component.css']
})
export class NewOrdersStepTwoComponent implements OnInit, OnChanges {
  @Output() public stepOutput2: EventEmitter<any> = new EventEmitter();
  public me;
  public order: any = {};
  public basketArray = [];
  public instruction: string;
  public minDate = new Date();

  // var a = 1000*60*60*24
    // new Date(new Date().getTime()+a)
  // @Output() onOrder = new EventEmitter()

  public collectionTime1: string;
  public collectionTime2: string;
  public dataCollection: any = this.minDate;
  public minDateDelivery = new Date(this.dataCollection.getFullYear(), this.dataCollection.getMonth(), this.dataCollection.getDate() + 1);
  public deliveryTime1: string;
  public deliveryTime2: string;
  public dataDelivery: any = this.minDateDelivery;
  public deliveryInstruciton: string;

  constructor(
      private router: Router,
      private auth: AuthService,
      private crud: CrudService,
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe((v: any) => {
      if (v) {
        this.me = Object.assign({}, v);
        this.me['instruction'] = this.instruction;
        this.me['dataCollection'] = this.dataCollection;
        this.me['dataDelivery'] = this.dataDelivery;
        this.me['collectionTime1'] = this.collectionTime1;
        this.me['collectionTime2'] = this.collectionTime2;
        this.me['deliveryTime1'] = this.deliveryTime1;
        this.me['deliveryTime2'] = this.deliveryTime2;
        this.me['deliveryInstruction'] = this.deliveryInstruciton;
      }
    });
    this.getBasket();
  }
  ngOnChanges() {
  }
  EndDateColectionChange(v) {
    const date = new Date(v.value);
    if (this.minDateDelivery) {
      if (this.minDateDelivery.getDate() < date.getDate()) {
        this.dataDelivery = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
      }
    }
    this.minDateDelivery = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    this.me.dataDelivery = this.minDateDelivery;
    this.auth.bascketOrder(this.order);
  }
  getBasket() {
    const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
    const query = JSON.stringify({'createdBy.itemId': this.me._id, cleanerOwner: { $exists: true }, status: 0});
    this.crud.getNoCache(`basket?query=${query}&populate=${populate}`).then((v: any) => {
      this.basketArray = v;
      this.order = {
        baskets: this.basketArray,
        orderInfo: this.me
      };
      this.auth.bascketOrder(this.order);
    });
  }
  removeProd(prodId, i) {
    this.crud.deleteOrder(`product`, prodId).then((v: any) => {
      const index = this.crud.find('_id', prodId, this.basketArray[i].products);
      this.basketArray[i].products.splice(index, 1);
      if (this.basketArray[i].products.length === 0) {
        this.basketArray.splice(i, 1);
      }
      this.auth.bascketOrder(this.order);
    });
  }
  goBack() {
    this.stepOutput2.emit(1);
  }
}
