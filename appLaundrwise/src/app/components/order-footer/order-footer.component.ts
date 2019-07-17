import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth.service";
import {CrudService} from "../../crud.service";
import {WS} from "../../websocket/websocket.events";
import {WebsocketService} from "../../websocket";

@Component({
    selector: 'app-order-footer',
    templateUrl: './order-footer.component.html',
    styleUrls: ['./order-footer.component.scss']
})
export class OrderFooterComponent implements OnInit, OnChanges {
    public mainTotalPrice: number;
    @Input() step;
    @Output() stepChange = new EventEmitter();
    public order: any = null;
    public isValidOrder: boolean = false;
    public orderArray;
    public link = '/orders';
    public btns = ['', 'Your basket', 'Confirm order', 'Finish'];
    constructor(
        private auth: AuthService,
        private crud: CrudService,
        private wsService: WebsocketService
    ) { }

    ngOnInit() {
        if (this.step === 3) {
            this.link = '/profile';
        }
        this.auth.onTotalPrice.subscribe(( v: any ) => {
            if (v) {
                this.crud.getNoCache('totalPrice/0').then((value: any) => {
                    this.mainTotalPrice = value.totalPrice;
                });
            }
        });
        this.auth.onOrderConfirm.subscribe((v: any) => {
            if (v) {
                this.order = v;
                console.log(this.order);
                if (this.order.basket.length === 0 ||
                    !this.order.orderInfo.address1 ||
                    !this.order.orderInfo.dataColection ||
                    !this.order.orderInfo.dataDelivery) {
                    this.isValidOrder = false;
                } else {
                    this.isValidOrder = true;
                }
            }
        });
    }
    ngOnChanges() {
        if (this.order && (this.order.basket.length === 0 ||
            !this.order.orderInfo.address1 ||
            !this.order.orderInfo.dataColection ||
            !this.order.orderInfo.dataDelivery)) {
            this.isValidOrder = false;
        } else {
            this.isValidOrder = true;
        }
    }
    doConfirm() {
        const basket = [];
        const ObjBasket  = {};
        this.order.basket.map(it => {
            basket.push(it._id);
            ObjBasket[it._id] = it;
        });
        const basketGroup = {
            baskets: basket
        };
        const objBasket = {
            status: 1,
            dpc: this.order.orderInfo.dpc,
            dpd: this.order.orderInfo.dpd,
            timeColection1: this.order.orderInfo.timeColection1,
            timeColection2: this.order.orderInfo.timeColection2,
            deliveryTime1: this.order.orderInfo.deliveryTime1,
            deliveryTime2: this.order.orderInfo.deliveryTime2,
            deliveryInstruction: this.order.orderInfo.deliveryInstruciton,
            instruction: this.order.orderInfo.instruction,
            address1: this.order.orderInfo.address1,
            address2: this.order.orderInfo.address2,
            firstName: this.order.orderInfo.firstName,
            lastName: this.order.orderInfo.lastName,
            email: this.order.orderInfo.email,
            cityCode: this.order.orderInfo.cityCode,
            country: this.order.orderInfo.country,
            mobile: this.order.orderInfo.mobile,
        };
        this.crud.post('basketGroup', basketGroup).then((v: any) => {
            this.order.basket.forEach(bskt => {
                this.crud.post('basket', objBasket, bskt._id).then((update: any) => {
                    if (update) {
                        this.wsService.send(WS.SEND.CONFIRM_ORDER, {superManager: bskt.cleanerOwner.superManager},  { data: v });
                    }
                });
            });
            this.step += 1;
            this.stepChange.emit(this.step);
        });
    }

    decrementStep() {
        this.step -= 1;
        this.stepChange.emit(this.step);
    }

    incrementStep() {
        this.step += 1;
        this.stepChange.emit(this.step);
    }

}
