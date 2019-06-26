import {Component, Input, OnInit} from '@angular/core';
import {Post, PostObj} from "../../post/post";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";
import {Category, CategoryObj} from "../category";
import {MatTableDataSource} from "@angular/material";
import {Product, ProductObj} from "../product";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})

export class CategoryEditComponent implements OnInit {
    @Input() iframe = false;
    public id;
    public category: Category = new CategoryObj();
    public initDataPost: Category = new CategoryObj();
    public isBlok: boolean = false;
    public displayedColumns: string[] = ['name', 'date', 'edit', 'del'];
    public product: Product = new ProductObj();
    public producForTable: Product[];
    public dataSource = new MatTableDataSource();
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crud: CrudService
    ) { }

    ngOnInit() {
        if (this.iframe) {
            this.displayedColumns = ['name', 'date'];
        } else {
            this.displayedColumns = ['name', 'date', 'edit', 'del'];
        }
        this.id = this.route.snapshot.paramMap.get('id');

        this.crud.get('category', this.id).then((v: any) => {
            this.initDataPost = v;
            this.category = Object.assign({}, v);
        });
        const query = JSON.stringify({path: 'superManager', skip: 0, limit: 8});
        this.crud.get(`product?category=${query}`).then((v: any) => {
            this.producForTable = v;
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

    userSubmit() {
        this.crud.post('category', this.category, this.id, ['category'] ).then( ( v: any ) => {
            this.initDataPost = v;
            this.category = Object.assign({}, v);
            this.router.navigate(['/admin/category']);
        }).catch(e => {

        });
    }

}
