import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../../crud.service";
import {Category, CategoryObj} from "../category";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

    public category:Category = new CategoryObj();

    constructor(
        private crud: CrudService
    ) { }

    ngOnInit() {
    }

    addPost() {
        delete this.category.date;
        this.crud.post('category', this.category);
    }
    fsData(data) {
        this.category.icon = (data.file);
    }
}
