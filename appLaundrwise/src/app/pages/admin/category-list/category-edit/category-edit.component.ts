import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";
import {Category, CategoryObj} from "../category";
import {MatTableDataSource} from "@angular/material";
import {Product, ProductObj} from "../product";
import Swal from "sweetalert2";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})

export class CategoryEditComponent implements OnInit {
    public id;
    public category: Category = new CategoryObj();
    public initDataPost: Category = new CategoryObj();
    public isBlok: boolean = false;
    public displayedColumns: string[] = ['name', 'date', 'edit', 'del'];
    public product: Product = new ProductObj();
    public producForTable: Product[];
    public dataSource = new MatTableDataSource();
    public remImg: boolean = false;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.displayedColumns = ['name', 'date', 'del'];
        this.id = this.route.snapshot.paramMap.get('id');
        const populate = JSON.stringify({path: 'product', skip: 0, limit: 0});
        const query = JSON.stringify({_id: this.id});
        this.crud.get(`category?query=${query}&populate=${populate}`).then((v: any) => {
            this.initDataPost = v[0];
            this.category = Object.assign({}, v[0]);
            this.producForTable = v[0].product;
            this.dataSource = new MatTableDataSource(this.producForTable);
        });
    }

    validate() {
        let isTrue = false;
        for (const key in this.category) {
            if (this.initDataPost[key] !== this.category[key]) isTrue = true;
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
        this.category.icon = (data.file);
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
                this.category.icon = null;
                this.product.images = null;
                this.remImg = !this.remImg;
            }
        });
    }

    userSubmit() {
        this.crud.post('category', this.category, this.id, ['category'] ).then( ( v: any ) => {
            this.initDataPost = v;
            this.category = Object.assign({}, v);
            this.router.navigate(['/admin/cleaners']);
        }).catch(e => {

        });
    }
    deletProd(elem) {
        this.crud.delete('order', elem._id, elem, ['order']).then((v: any) => {
            this.producForTable.splice(this.crud.find('_id', elem._id, this.category), 1);
            this.dataSource = new MatTableDataSource(this.producForTable);
        });
    }
}
