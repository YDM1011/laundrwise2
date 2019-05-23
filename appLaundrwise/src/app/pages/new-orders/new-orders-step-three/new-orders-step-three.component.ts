import {Component, OnInit} from '@angular/core';
import {OrderModel} from '../../../models';
import {DynamicChangeStepOrderService} from '../../../subjects';
import {OrderService} from '../../../services';

@Component({
  selector: 'app-new-orders-step-three',
  templateUrl: './new-orders-step-three.component.html',
  styleUrls: ['./new-orders-step-three.component.css']
})
export class NewOrdersStepThreeComponent implements OnInit {
  order: OrderModel = new OrderModel();
  constructor(private  changeStepservice: DynamicChangeStepOrderService, private orderService: OrderService) {
  }

  ngOnInit() {
    this.changeStepservice.objectForChangedStep.subscribe((data: any) => {
      if (data) {
        this.order = data;
      }
    });
  }
  createOrder(order) {
    this.orderService.createOrder(order).subscribe((data) => {
      if (data) {
       console.log(data);
      }
    }, (error) => {
      console.log (error);
    });
  }

}
