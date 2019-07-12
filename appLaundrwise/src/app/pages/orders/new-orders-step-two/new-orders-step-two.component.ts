import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../auth.service';
import {Router} from "@angular/router";
import {CrudService} from "../../../crud.service";
import {MatDatepickerInputEvent} from "@angular/material";

@Component({
  selector: 'app-new-orders-step-two',
  templateUrl: './new-orders-step-two.component.html',
  styleUrls: ['./new-orders-step-two.component.css']
})
export class NewOrdersStepTwoComponent implements OnInit, OnChanges {
  public me;
  public order;
  public basketArray = [];
  public instruction: string;
  minDate = new Date();
    // var a = 1000*60*60*24
    // new Date(new Date().getTime()+a)
  // @Output() onOrder = new EventEmitter()
  constructor(
      private router: Router,
      private auth: AuthService,
      private crud: CrudService,
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe((v: any) => {
      if (v) {
        this.me = Object.assign({},v);
        this.me['instruction'] = '';
        this.me['dp1'] = new Date();
        this.me['dp2'] = new Date();
      }
    });
    this.getBasket();
  }
  ngOnChanges() {
    console.log(this.order)
  }
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
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
    console.log(prodId);
    this.crud.deleteOrder(`product`, prodId).then((v: any) => {
      console.log("URA!", i);
      const indexCleaner = i
      console.log("URA!",this.basketArray[indexCleaner], this.basketArray, indexCleaner);
      const index = this.crud.find('_id', prodId, this.basketArray[indexCleaner].products);
      this.basketArray[indexCleaner].products.splice(index, 1);
    });
  }
}
