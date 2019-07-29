import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {CrudService} from "../../../crud.service";
import {Cleaner} from "./cleaner";
import {CategoryIncludedComponent} from "../../../components/category-included/category-included.component";
import {SuperManagerFormComponent} from "../../../components/super-manager-form/super-manager-form.component";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-cleaners-list',
  templateUrl: './cleaners-list.component.html',
  styleUrls: ['./cleaners-list.component.scss']
})
export class CleanersListComponent implements OnInit, OnChanges {
    public dataSource = new MatTableDataSource();
    public displayedColumns: string[] = ['name', 'sm', 'category', 'date', 'edit', 'del'];
    public cleaner: Cleaner[];
    public loading: boolean = false;
    constructor(
        public dialog: MatDialog,
        public auth: AuthService,
        private crud: CrudService
    ) { }
    ngOnChanges() {
    }
    ngOnInit() {
        const query = JSON.stringify({path: 'superManager', skip: 0, limit: 0});
        this.crud.getNoCache(`cleaner?populate=${query}`).then((v: any) => {
            this.cleaner = v;
            this.dataSource = new MatTableDataSource(this.cleaner);
            this.loading = true;
        });

        this.auth.onUpdateSuperManager.subscribe(( v: any ) => {
            if (v) {
                const query1 = JSON.stringify({path: 'superManager', skip: 0, limit: 0});
                this.crud.getNoCache(`cleaner?populate=${query1}`).then((v: any) => {
                    this.cleaner = v;
                    this.dataSource = new MatTableDataSource(this.cleaner);
                });
            }
        });
    }

    deletItem(elem) {
        this.cleaner.splice(this.crud.find('_id', elem._id, this.cleaner), 1);
        this.crud.delete('cleaner', elem._id, elem, ['cleaner']).then((v: any) => {
            this.dataSource = new MatTableDataSource(this.cleaner);
        });
    }

    showCategory(elem) {
        this.dialog.open(CategoryIncludedComponent, { width: '360px', height: 'auto', data: elem});
    }

    addManeger(elem) {
        this.dialog.open(SuperManagerFormComponent, { width: 'auto', height: '420px', data: {_id: elem}});
    }
}
