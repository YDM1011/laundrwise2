import {Component, OnInit} from '@angular/core';
import {OrderModel} from '../../models';
import {OrderService} from '../../services';

@Component({
    selector: 'app-new-order',
    templateUrl: './new-order.component.html',
    styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
    order: OrderModel = new OrderModel();

    constructor(private orderService: OrderService) {}

    ngOnInit() {
        this.getOrders();
    }

    createOrder(order) {
        this.orderService.createOrder(order).then((data: any) => {
                console.log(data);
                localStorage.setItem('token', 'testToken');
            },
            (error) => {
                console.log(error);
            });
    }
    getOrders() {
        this.orderService.getAllUserOrders().then((data: any) => {
                console.log(data);
                localStorage.setItem('token', 'testToken');
            },
            (error) => {
                console.log(error);
            });
    }
}
