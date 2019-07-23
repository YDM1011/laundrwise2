import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../../../crud.service';
import {Category, CategoryObj} from '../category';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
    public cleanerId;
    public category: Category = new CategoryObj();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.cleanerId = this.route.snapshot.paramMap.get('cleanerId');
    }

    addPost() {
        if (!this.category.icon || !this.category.name) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All field required'
            });
        } else {
            delete this.category.date;
            this.category['cleaner'] = this.cleanerId;
            this.category.name = this.category.name.toLowerCase();
            this.crud.post('category', this.category, null, ['category']).then(v => {
                this.router.navigate([`/admin/cleaner-edit/${this.cleanerId}`]);
            });
        }
    }
    fsData(data) {
        this.category.icon = (data.file);
    }
}
