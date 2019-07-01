import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-orders-step-one',
  templateUrl: './new-orders-step-one.component.html',
  styleUrls: ['./new-orders-step-one.component.css']
})
export class NewOrdersStepOneComponent implements OnInit {
  public selected = '';
  @Input() stepZeroValue;
  public courentClener: any;
  public category: [];
  public product: [];
  public allCleaners: [];
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getProducts(params.type);
    });

    const query = JSON.stringify({path: '', skip: 0, limit: 0});
    this.crud.get(`cleaner?populate=${query}`).then((v: any) => {
      this.courentClener = v[0];
      this.allCleaners = v;
      this.selected = this.courentClener._id.toString();
      this.getCategory(this.courentClener);
    });
  }

  getCategory(cat) {
    let query = JSON.stringify({path: 'category', limit: 0, skip: 0});
    query = `?populate=${query}`;
    this.crud.getNoCache('cleaner', cat._id, query).then((v: any) => {
      this.category = v.category;
      const defoultCategory = v.category[0].name.toLowerCase();
      this.router.navigate(['/orders/' + defoultCategory]);
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

  orderItem(value) {
    console.log(value);
  }
}
