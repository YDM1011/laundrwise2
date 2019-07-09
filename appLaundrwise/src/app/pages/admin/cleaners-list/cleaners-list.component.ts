import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {CrudService} from "../../../crud.service";
import {Cleaner} from "./cleaner";
import {CategoryIncludedComponent} from "../../../components/category-included/category-included.component";
import {SuperManagerFormComponent} from "../../../components/super-manager-form/super-manager-form.component";

@Component({
  selector: 'app-cleaners-list',
  templateUrl: './cleaners-list.component.html',
  styleUrls: ['./cleaners-list.component.scss']
})
export class CleanersListComponent implements OnInit {
    public dataSource = new MatTableDataSource();
    public displayedColumns: string[] = ['name', 'sm', 'category', 'date', 'edit', 'del'];
    public cleaner: Cleaner[];
    constructor(
        public dialog: MatDialog,
        private crud: CrudService
    ) { }

    ngOnInit() {
        const query = JSON.stringify({path: 'superManager', skip: 0, limit: 0});
        this.crud.get(`cleaner?populate=${query}`).then((v: any) => {
            this.cleaner = v;
            this.dataSource = new MatTableDataSource(this.cleaner);
        });
    }

    deletItem(elem) {
        this.cleaner.splice(this.crud.find('_id', elem._id, this.cleaner), 1);
        this.crud.delete('cleaner', elem._id, elem, ['cleaner']).then((v: any) => {
            this.dataSource = new MatTableDataSource(this.cleaner);
        });
    }

    showCategory(elem) {
        this.dialog.open(CategoryIncludedComponent, { width: '50%', height: '50%', data: elem});
    }

    addManeger(elem) {
        this.dialog.open(SuperManagerFormComponent, { width: 'auto', height: '420px', data: {_id: elem}});
    }

}
