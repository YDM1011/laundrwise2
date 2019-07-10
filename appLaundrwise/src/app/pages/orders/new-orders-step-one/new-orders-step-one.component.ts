import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderProduct, OrderProductObj} from "./orderProduct";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-new-orders-step-one',
  templateUrl: './new-orders-step-one.component.html',
  styleUrls: ['./new-orders-step-one.component.css']
})
export class NewOrdersStepOneComponent implements OnInit, OnChanges {
  public selected = '';
  public defoultCategoryRouter = '';
  @Input() chooseCompany;
  @Input() allCompany;
  @Output() totalPrice: EventEmitter<any> = new EventEmitter();
  @Output() outputArray: EventEmitter<any> = new EventEmitter();
  public category: any[];
  public product: any[];
  public allCleaners: any[];
  public order: OrderProduct = new OrderProductObj();
  public orderArray: Array<any> = [];
  public totalPriceArray: number = 0;
  public currentBasketList: any = [];
  public prod: any;
  public productlist: Array<any> = [];
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService,
      private auth: AuthService
  ) {}

  ngOnInit() {
    this.selected = this.chooseCompany._id;
    this.defoultCategoryRouter =  this.chooseCompany.category[0].name.toLowerCase();
    this.router.navigate(['/orders/' + this.defoultCategoryRouter]);
    this.route.params.subscribe((params: any) => {
      this.getProducts(params.type);
    });
    // this.auth.getBasketGroup.subscribe((v: any) => {
    //   this.orderArray = v;
    // });
  }
  companyChange(e) {
    this.chooseCompany = e;
    this.selected = this.chooseCompany._id;
    this.defoultCategoryRouter =  this.chooseCompany.category[0].name.toLowerCase();
    this.router.navigate(['/orders/' + this.defoultCategoryRouter]);
  }
  ngOnChanges() {
    this.auth.setBasketGroup(this.orderArray);
  }
  getProductByCleanerId() {
    this.crud.getNoCache(`productBy/:cleanerId`, this.chooseCompany._id).then((v: any) => {
      console.log(v);
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

  orderItemAdd(value) {
    value.cleanerOwner = this.chooseCompany._id;
    this.prod = Object.assign({}, value);
    this.prod['currentOrder'] = this.prod._id;
    delete this.prod._id;

    this.crud.post('product', this.prod).then((v: any) => {
      console.log(v);
    });

    const index = this.crud.find('_id', value._id, this.productlist);
    if (typeof index === 'number') {
      this.productlist[index].count = value.count;
    } else {
      this.productlist.push(value);
    }
    console.log(this.productlist);
  }

  orderItemRemove(value) {
    value.cleanerOwner = this.chooseCompany._id;
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
