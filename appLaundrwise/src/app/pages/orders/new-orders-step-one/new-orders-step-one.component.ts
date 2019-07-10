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

  public allCleaners: any[];

  // public orderArray: Array<any> = [];
  public totalPriceArray: number = 0;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService,
      private auth: AuthService
  ) {}

  ngOnInit() {
    this.selected = this.chooseCompany._id;
    this.defoultCategoryRouter =  this.chooseCompany.category[0].name.toLowerCase();
    this.router.navigate([`/orders/${this.selected}/${this.defoultCategoryRouter}`]);

    // this.auth.getBasketGroup.subscribe((v: any) => {
    //   this.orderArray = v;
    // });
  }
  companyChange(e) {
    // this.chooseCompany = e;
    // this.selected = this.chooseCompany._id;
    // this.defoultCategoryRouter =  this.chooseCompany.category[0].name.toLowerCase();
    // this.router.navigate(['/orders/' + this.defoultCategoryRouter]);
  }
  ngOnChanges() {
    // this.auth.setBasketGroup(this.orderArray);
  }

}
