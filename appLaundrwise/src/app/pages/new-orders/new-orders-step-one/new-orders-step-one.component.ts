import {Component, OnInit} from '@angular/core';
import {OrderModel} from '../../../models';
import {DynamicChangeStepOrderService} from '../../../subjects';

@Component({
  selector: 'app-new-orders-step-one',
  templateUrl: './new-orders-step-one.component.html',
  styleUrls: ['./new-orders-step-one.component.css']
})
export class NewOrdersStepOneComponent implements OnInit {
  order: OrderModel = new OrderModel ();
  constructor(private  changeStepservice: DynamicChangeStepOrderService) {
  }

  ngOnInit() {
  }

  createOrder(order) {
   this.changeStepservice.changeStep(order);
  }

}
