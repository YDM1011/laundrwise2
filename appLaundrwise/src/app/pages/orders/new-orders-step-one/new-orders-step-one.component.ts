import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderProduct, OrderProductObj} from "./orderProduct";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-new-orders-step-one',
  templateUrl: './new-orders-step-one.component.html',
  styleUrls: ['./new-orders-step-one.component.css']
})
export class NewOrdersStepOneComponent implements OnInit, OnChanges, OnDestroy {
  public defoultCategoryRouter = '';
  public dataParams: any =  {
    cleanerId: '',
    type: ''
  };

  @Input() chooseCompany;
  @Input() allCompany;
  @Output() totalPrice: EventEmitter<any> = new EventEmitter();
  @Output() outputArray: EventEmitter<any> = new EventEmitter();
  // public category: any[];

  // public allCleaners: any[];

  // public orderArray: Array<any> = [];
  // public totalPriceArray: number = 0;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService,
      private auth: AuthService
  ) {}

  ngOnInit() {
    if (this.chooseCompany) {
        this.dataParams.cleanerId = this.chooseCompany._id;
        this.defoultCategoryRouter =  this.chooseCompany.category[0].name.toLowerCase();
        this.dataParams.type = this.defoultCategoryRouter;
        // this.router.navigate([`/orders/${this.selected}/${this.defoultCategoryRouter}`]);
    }

    // this.auth.getBasketGroup.subscribe((v: any) => {
    //   this.orderArray = v;
    // });
  }
  ngOnDestroy() {}
  companyChange(e) {
    const prop = {};
    this.chooseCompany = e;
    prop['cleanerId'] = this.chooseCompany._id;
    this.defoultCategoryRouter =  this.chooseCompany.category[0].name.toLowerCase();
    prop['type'] = this.defoultCategoryRouter;
    this.dataParams = prop;

    // this.selected = this.chooseCompany._id;
    // this.defoultCategoryRouter =  this.chooseCompany.category[0].name.toLowerCase();
    // this.router.navigate(['/orders/' + this.defoultCategoryRouter]);
  }
  ngOnChanges() {
    // this.auth.setBasketGroup(this.orderArray);
  }

  changeCategory(v) {
    const prop = {};
    prop['cleanerId'] = this.chooseCompany._id;
    prop['type'] = v;
    this.dataParams = prop;
  }

}
