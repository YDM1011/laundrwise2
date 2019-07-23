import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductObj} from "../product";
import {CrudService} from "../../../../crud.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

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

    if (!this.product.images || !this.product.name || !this.product.price || !this.product.des) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'All field required'
      });
    } else {
      this.product.categoryOwner = this.id;
      this.crud.post('order', this.product, null, ['order']).then(v => {
        this.router.navigate([`/admin/category-edit/${this.id}`]);
      });
    }
  }

  fsData(data) {
    this.product.images = (data.file);
  }

}
