import { Component, OnInit } from '@angular/core';
import {Post} from "../post/post";
import {CrudService} from "../../../crud.service";
import {Category} from "./category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

    public category: Category;
    constructor(
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.crud.get('category').then((v:any)=>{
            this.category = v;
        });
    }

}
