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
  public order;
  public basketArray = [];
  public instruction: string;
  public minDate = new Date();

  // var a = 1000*60*60*24
    // new Date(new Date().getTime()+a)
  // @Output() onOrder = new EventEmitter()

  public collectionTime1: string;
  public collectionTime2: string;
  public dataColection: any = this.minDate;
  public minDateDelivery = new Date(this.dataColection.getFullYear(), this.dataColection.getMonth(), this.dataColection.getDate() + 1);

  public deliveryTime1: string;
  public deliveryTime2: string;
  public dataDelivery: any = this.minDateDelivery;
  constructor(
      private router: Router,
      private auth: AuthService,
      private crud: CrudService,
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe((v: any) => {
      if (v) {
        this.me = Object.assign({}, v);
        this.me['instruction'] = '';
        this.me['dp1'] = new Date();
        this.me['dp2'] = new Date();
      }
    });
    this.getBasket();
  }
  ngOnChanges() {
    console.log(this.order);
  }
  EndDateColectionChange(v) {
    const date = new Date(v.value);
    if (this.minDateDelivery) {
      if (this.minDateDelivery.getDate() < date.getDate()) {
        this.dataDelivery = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
      }
    }
    this.minDateDelivery = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }
  getBasket() {
    const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name'}, {path: 'products'}]);
    const query = JSON.stringify({'createdBy.userId': this.me._id, cleanerOwner:{$exists:true}});
    this.crud.getNoCache(`basket?query=${query}&populate=${populate}`).then((v: any) => {
      this.basketArray = v;
      this.order = {
        baskets: this.basketArray,
        orderInfo: this.me
      };
      this.auth.bascketOrder(this.order);
      // this.onOrder.emit(obj)
    });
  }
  removeProd(prodId, i) {
    this.crud.deleteOrder(`product`, prodId).then((v: any) => {
      const index = this.crud.find('_id', prodId, this.basketArray[i].products);
      this.basketArray[i].products.splice(index, 1);
    });
  }
  goBack() {
    this.stepOutput2.emit(1);
  }
}
