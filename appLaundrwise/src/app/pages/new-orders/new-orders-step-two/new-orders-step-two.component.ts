import {Component, OnInit} from '@angular/core';
import {OrderModel} from '../../../models';
import {DynamicChangeStepOrderService} from '../../../subjects';

@Component({
  selector: 'app-new-orders-step-two',
  templateUrl: './new-orders-step-two.component.html',
  styleUrls: ['./new-orders-step-two.component.css']
})
export class NewOrdersStepTwoComponent implements OnInit {
  order: OrderModel = new OrderModel();
  constructor(private  changeStepservice: DynamicChangeStepOrderService) {
  }

  ngOnInit() {
    this.changeStepservice.objectForChangedStep.subscribe((data: any) => {
      if (data) {
        this.order = data;
      }
    });
  }
  changeStep(order) {
    this.changeStepservice.changeStep(order);
  }

}
