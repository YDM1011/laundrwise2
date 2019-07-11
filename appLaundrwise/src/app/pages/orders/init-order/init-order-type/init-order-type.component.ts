import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {OrderProduct, OrderProductObj} from "../../new-orders-step-one/orderProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";
import {AuthService} from "../../../../auth.service";

@Component({
  selector: 'app-init-order-type',
  templateUrl: './init-order-type.component.html',
  styleUrls: ['./init-order-type.component.scss']
})
export class InitOrderTypeComponent implements OnInit, OnChanges {
    @Input() params:any = {};
    @Output() totalPrice = new EventEmitter();
    public product: any = {};
    public order: OrderProduct[];
    public orderArray: Array<any> = [];
    public currentBasketList: any = [];
    public prod: any;
    public productlist: Array<any> = [];

    public cleanerId: string
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService,
      private auth: AuthService
  ) { }

  ngOnInit() {
      // this.route.params.subscribe((params: any) => {
      console.log(this.params)
          this.cleanerId = this.params.cleanerId;
          this.getOrders(this.params.type);
      // });
  }
  ngOnChanges(){
      console.log(this.params)
      this.cleanerId = this.params.cleanerId;
      this.getOrders(this.params.type);
  }
  getProductByCleanerId() {
      this.crud.getNoCache(`productBy/${this.cleanerId}`, null).then((v: any) => {
          this.order.map(ord=>{
              if (v[ord._id]){
                  ord['count'] = v[ord._id].count;
                  ord['productId'] = v[ord._id]._id;
                  ord['totalPrice'] = v[ord._id].price * v[ord._id].count;
                  this.product[ord._id] = ord;
              }
          });
          this.calcTotalPrice();
      });
  }

  getOrders(prod) {
      const populate = JSON.stringify({path: 'product', limit: 1, skip: 0});
      let query = JSON.stringify({name: prod});
      query = `?populate=${populate}&query=${query}`;
      this.crud.getNoCache('category', null, query).then((v: any) => {
          if ( v.length > 0 ) {
              this.order = v[0].product;
              this.getProductByCleanerId()
          }
      });
  }

  orderItemAdd(value, order) {
      value.cleanerOwner = this.cleanerId;
      this.prod = Object.assign({}, value);
      this.prod['currentOrder'] = this.prod._id;
      delete this.prod._id;
      this.crud.post('product', this.prod).then((v:any)=>{
          order['productId'] = this.prod._id
      });
      this.calcTotalPrice();
      console.log(this.productlist);
      console.log(this.prod);
  }

  orderItemRemove(value, order) {
      value.cleanerOwner = this.cleanerId;
      this.prod = Object.assign({}, value);
      this.prod['currentOrder'] = this.prod._id;
      delete this.prod._id;

      const index = this.crud.find('_id', value._id, this.productlist);
      if (value.count === 0) {
          this.productlist.splice(index, 1);
      }
      this.calcTotalPrice();
      console.log(this.productlist);
  }

  calcTotalPrice() {
    let price = 0;
      console.log(this.product)
    for (var prop in this.product) {
        price += this.product[prop].count*this.product[prop].price
    }

    this.totalPrice.emit(price)
  }
}
