import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../admin/category-list/product";
import {OrderProduct, OrderProductObj} from "./orderProduct";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-new-orders-step-one',
  templateUrl: './new-orders-step-one.component.html',
  styleUrls: ['./new-orders-step-one.component.css']
})
export class NewOrdersStepOneComponent implements OnInit, OnChanges {
  public selected = '';
  @Input() stepZeroValue;
  @Output() totalPrice: EventEmitter<any> = new EventEmitter();
  @Output() outputArray: EventEmitter<any> = new EventEmitter();
  public courentClener: any;
  public category: [];
  public product: [];
  public allCleaners: [];
  public order: OrderProduct = new OrderProductObj();
  public orderArray: Array<any> = [];
  public totalPriceArray: number = 0;
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService,
      private auth: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getProducts(params.type);
    });
    this.auth.getBasket.subscribe((v: any) => {
      this.orderArray = v;
    });
    const query = JSON.stringify({path: '', skip: 0, limit: 0});
    this.crud.get(`cleaner?populate=${query}`).then((v: any) => {
      this.courentClener = v[0];
      this.allCleaners = v;
      this.selected = this.courentClener._id.toString();
      this.getCategory(this.courentClener);
    });
  }

  ngOnChanges() {
    this.auth.setBasket(this.orderArray);
  }

  getCategory(cat) {
    let query = JSON.stringify({path: 'category', limit: 0, skip: 0});
    query = `?populate=${query}`;
    this.crud.getNoCache('cleaner', cat._id, query).then((v: any) => {
      if (v.category.length > 0) {
        this.category = v.category;
        const defoultCategory = v.category[0].name.toLowerCase();
        this.router.navigate(['/orders/' + defoultCategory]);
      } else {
        this.product = [];
      }
    });
  }
  getProducts(prod) {
    const populate = JSON.stringify({path: 'product', limit: 1, skip: 0});
    let query = JSON.stringify({name: prod});
    query = `?populate=${populate}&query=${query}`;
    this.crud.getNoCache('category', null, query).then((v: any) => {
      if ( v.length > 0 ) {
        this.product = v[0].product;
      }
    });
  }

  cleanersChange(value) {
    let query = JSON.stringify({path: '', limit: 0, skip: 0});
    query = `?populate=${query}`;
    this.crud.getNoCache('cleaner', value.value, query).then((v: any) => {
      this.courentClener = v;
      this.category = v.category;
      this.router.navigate(['/orders/' + this.courentClener.name.toLowerCase()]);
      this.getCategory(v);
    });
  }

  orderItemAdd(value) {
    const index = this.crud.find('_id', value._id, this.orderArray);
    if (typeof index === 'number') {
      this.orderArray[index].count = value.count;
      this.product['count'] = value.count;
    } else {
      this.orderArray.push(value);
    }
    this.auth.setBasket(this.orderArray);
  }

  orderItemRemove(value) {
    const index = this.crud.find('_id', value._id, this.orderArray);
    if (typeof index === 'number') {
      this.totalPriceArray = this.totalPriceArray - value.price;
      this.product['count'] = 0;
      this.orderArray.splice(index, 1);
      this.auth.setBasket(this.orderArray);
    }
  }
}
