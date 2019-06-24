import { Component, OnInit } from '@angular/core';
import {Post, PostObj} from "../../post/post";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";
import {Category, CategoryObj} from "../category";

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
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crud: CrudService
    ) { }

    ngOnInit() {

        this.id = this.route.snapshot.paramMap.get('id');

        this.crud.get('category', this.id).then((v: any) => {
            this.initDataPost = v;
            this.category = Object.assign({}, v);
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
            this.router.navigate(['/admin/category'])
        }).catch(e => {

        });
    }

}
