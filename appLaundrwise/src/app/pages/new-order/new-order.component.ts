import {Component, OnInit} from '@angular/core';
import {OrderModel} from '../../models';
import {ApiService} from '../../services';

@Component({
    selector: 'app-new-order',
    templateUrl: './new-order.component.html',
    styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
    order: OrderModel = new OrderModel();

    constructor(private orderService: ApiService) {}

    ngOnInit() {
        this.getOrders();
    }

    createOrder(order) {
        this.orderService.post('create_order', order).then((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }
    getOrders() {
        this.orderService.get('get_all_orders').then((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }
}
