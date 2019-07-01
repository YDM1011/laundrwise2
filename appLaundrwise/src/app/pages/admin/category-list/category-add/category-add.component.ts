import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../../crud.service';
import {Category, CategoryObj} from '../category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

    public category: Category = new CategoryObj();

    constructor(
        private router: Router,
        private crud: CrudService
    ) { }

    ngOnInit() {

    }

    addPost() {
        delete this.category.date;
        this.category.name = this.category.name.toLowerCase();
        this.crud.post('category', this.category, null, ['category']).then(v => {
            this.router.navigate(['/admin/category']);
        });
    }
    fsData(data) {
        this.category.icon = (data.file);
    }
}
