import {Component, OnChanges, OnInit} from '@angular/core';
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
    public product: any[];
    public order: OrderProduct = new OrderProductObj();
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
      this.route.params.subscribe((params: any) => {
          this.cleanerId = params.cleanerId;
          this.getOrders(params.type);
      });
  }
  ngOnChanges(){}
  getProductByCleanerId() {
      this.crud.getNoCache(`productBy/${this.cleanerId}`, null).then((v: any) => {
          this.order.map(ord=>{
              if (v[ord._id]){
                  ord['count'] = v[ord._id].count;
                  ord['productId'] = v[ord._id]._id;
              }
          })
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
      /** */

       /** */
      // this.crud.post('product', this.prod).then((v: any) => {
      //   console.log(v);
      // });

      // const index = this.crud.find('_id', value._id, this.productlist);
      // if (typeof index === 'number') {
      //     this.productlist[index].count = value.count;
      // } else {
      //     this.productlist.push(value);
      // }

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
      console.log(this.productlist);
  }
}
