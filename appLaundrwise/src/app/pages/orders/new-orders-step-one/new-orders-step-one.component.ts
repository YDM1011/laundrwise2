import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product, ProductObj} from "../../admin/category-list/product";

@Component({
  selector: 'app-new-orders-step-one',
  templateUrl: './new-orders-step-one.component.html',
  styleUrls: ['./new-orders-step-one.component.css']
})
export class NewOrdersStepOneComponent implements OnInit {
  selected = 'company1';
  @Input() stepZeroValue;
  public courentClener: any;
  public category: [];
  public product: Product = new ProductObj();
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
      this.courentClener = v[1];
      this.getCategory(this.courentClener);
    });
  }

  getCategory(cat) {
    let query = JSON.stringify({path: 'category', limit: 0, skip: 0});
    query = `?populate=${query}`;
    this.crud.getNoCache('cleaner', cat._id, query).then((v: any) => {
      this.category = v.category;
      console.log(v)
      const defoultCategory = v.category[0].name.toLowerCase();
      this.router.navigate(['/orders/' + defoultCategory]);
    });
  }
  getProducts(prod) {
    // let query = JSON.stringify({path: 'name', limit: 0, skip: 0});
    // query = `?populate=${query}`;
    // this.crud.getNoCache('category', prod, query).then((v: any) => {
    //   this.product = v;
    //   console.log(this.category);
    // });
  }

}
