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
    @Input() hidden;
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
                if (this.order.basket.length === 0 ||
                    !this.order.orderInfo.address1 ||
                    !this.order.orderInfo.dataCollection ||
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
            !this.order.orderInfo.dataCollection ||
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
            ObjBasket['instruction'] = it.instruction;
        });
        const basketGroup = {
            baskets: basket
        };
        const objBasket = {
            status: 1,
            dataCollection: this.order.orderInfo.dataCollection,
            dataDelivery: this.order.orderInfo.dataDelivery,
            collectionTime1: this.order.orderInfo.collectionTime1,
            collectionTime2: this.order.orderInfo.collectionTime2,
            deliveryTime1: this.order.orderInfo.deliveryTime1,
            deliveryTime2: this.order.orderInfo.deliveryTime2,
            deliveryInstruction: this.order.orderInfo.deliveryInstruciton,
            address1: this.order.orderInfo.address1,
            address2: this.order.orderInfo.address2,
            firstName: this.order.orderInfo.firstName,
            lastName: this.order.orderInfo.lastName,
            email: this.order.orderInfo.email,
            cityCode: this.order.orderInfo.cityCode,
            country: this.order.orderInfo.country,
            mobile: this.order.orderInfo.mobile,
        };
        console.log(objBasket);
        this.crud.post('basketGroup', basketGroup, null, false, false).then((v: any) => {
            this.order.basket.forEach(bskt => {
                objBasket['instruction'] = bskt.instruction;
                this.crud.post('basket', objBasket, bskt._id, false, false).then((update: any) => {
                    if (update) {
                        this.wsService.send(WS.SEND.CONFIRM_ORDER, bskt.cleanerOwner.superManager,  { data: bskt._id });
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
