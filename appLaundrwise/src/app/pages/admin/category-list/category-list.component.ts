import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CrudService} from '../../../crud.service';
import {Category} from './category';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnChanges {
    public dataSource = new MatTableDataSource();
    public displayedColumns: string[] = ['count', 'select', 'name', 'date', 'edit', 'del'];
    public category: Category[];
    @Input() cleanerId;
    @Output() onCategory = new EventEmitter();
    constructor(
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.displayedColumns = ['count', 'name', 'date', 'edit', 'del'];
        let query = JSON.stringify({
            cleaner: this.cleanerId
        });
        this.crud.getNoCache('category', '', `?query=${query}`).then((v: any) => {
            this.category = v;
            // if (this.iframe && this.useCategory) {
            //     this.category.map((item: any) => {
            //         if (this.useCategory.indexOf(item._id) > -1) {
            //             item.checked = true;
            //         } else {
            //             item.checked = false;
            //         }
            //     });
            // }
            this.dataSource = new MatTableDataSource(this.category);
        });
    }

    ngOnChanges() {
        // if (this.iframe && this.useCategory, this.category) {
        //     this.category.map((item: any) => {
        //         if (this.useCategory.indexOf(item._id) > -1) {
        //             item.checked = true;
        //         } else {
        //             item.checked = false;
        //         }
        //     });
        //     this.dataSource = new MatTableDataSource(this.category);
        // }
    }

    deletItem(elem) {
        this.crud.delete('category', elem._id, elem, ['category']).then((v: any) => {
            this.category.splice(this.crud.find('_id', elem._id, this.category), 1);
            this.dataSource = new MatTableDataSource(this.category);
        });
    }

    pushCategory() {
        this.onCategory.emit(this.category);
    }

}
