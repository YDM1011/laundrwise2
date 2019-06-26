import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";
import {Product, ProductObj} from "../product";
import Swal from "sweetalert2";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  public id: string;
  public initDataProduct: Product = new ProductObj();
  public product: Product = new ProductObj();
  public isBlok: boolean = false;
  public remImg: boolean = false;
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // const populate = JSON.stringify({path: 'product', skip: 0, limit: 0});
    const query = JSON.stringify({_id: this.id});

    this.crud.get(`product?query=${query}`).then((v: any) => {
      this.initDataProduct = v[0];
      this.product = Object.assign({}, v[0]);
    });
  }

  validate() {
    let isTrue = false;
    for (const key in this.product) {
      if (this.initDataProduct[key] !== this.product[key]) isTrue = true;
    }
    return isTrue;
  }

  btnBlok(is) {
    this.isBlok = is;
  }

  formCheck() {
    this.btnBlok(this.validate());
  }

  fsData(data) {
    this.product.images = data.file;
    this.initDataProduct.images = data.file;
    this.btnBlok(this.validate());
    this.remImg = !this.remImg;
  }

  userSubmit() {
    this.crud.post('product', this.product, this.id, ['product'] ).then( ( v: any ) => {
      this.initDataProduct = v;
      this.product = Object.assign({}, v);
      this.router.navigate(['/admin/category']);
    }).catch(e => {});
  }

  removeImg() {
    Swal.fire({
      title: 'Do you confirm the deletion?',
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      reverseButtons: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel!',
      confirmButtonColor: '#dd4535',
    }).then((result) => {
      if (result.value) {
        this.initDataProduct.images = null;
        this.product.images = null;
        this.remImg = !this.remImg;
      }
    });
  }

}
