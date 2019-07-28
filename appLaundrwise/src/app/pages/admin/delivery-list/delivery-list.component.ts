import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {CrudService} from "../../../crud.service";
import {SuperManagerFormComponent} from "../../../components/super-manager-form/super-manager-form.component";
import {Delivery} from "./delivery";

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {
    public dataSource = new MatTableDataSource();
    public displayedColumns: string[] = ['name', 'sm', 'date', 'edit', 'del'];
    public delivery: Delivery[];
    constructor(
        public dialog: MatDialog,
        private crud: CrudService
    ) { }

    ngOnInit() {
        const query = JSON.stringify({path: 'superManager', skip: 0, limit: 0});
        this.crud.getNoCache(`delivery?populate=${query}`).then((v: any) => {
            this.delivery = v;
            this.dataSource = new MatTableDataSource(this.delivery);
        });
    }

    deletItem(elem) {
        this.delivery.splice(this.crud.find('_id', elem._id, this.delivery), 1);
        this.crud.delete('delivery', elem._id, elem, ['delivery']).then((v: any) => {
            this.dataSource = new MatTableDataSource(this.delivery);
        });
    }

    addManeger(elem) {
        this.dialog.open(SuperManagerFormComponent, { width: '50%', height: '50%',
            data: {
                _id: elem,
                role: 'superManagerDelivery'
        }});
    }

}
