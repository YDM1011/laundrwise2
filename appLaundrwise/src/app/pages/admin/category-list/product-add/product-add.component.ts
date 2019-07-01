import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductObj} from "../product";
import {CrudService} from "../../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  public product: Product = new ProductObj();
  public id;
  constructor(
      private crud: CrudService,
      private router: Router,
      private routeActive: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routeActive.snapshot.paramMap.get('id');
  }

  addProduct() {
    this.product.categoryOwner = this.id;
    this.crud.post('order', this.product, null, ['order']).then(v => {
      this.router.navigate(['/admin/category']);
    });
  }

  fsData(data) {
    this.product.images = (data.file);
  }

}
