import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {CrudService} from "../../../crud.service";
import {Cleaner} from "./cleaner";

@Component({
  selector: 'app-cleaners-list',
  templateUrl: './cleaners-list.component.html',
  styleUrls: ['./cleaners-list.component.scss']
})
export class CleanersListComponent implements OnInit {
    public dataSource = new MatTableDataSource();
    public displayedColumns: string[] = ['name','date','edit','del'];
    public cleaner: Cleaner[];

    constructor(
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.crud.get('cleaner').then((v:any)=>{
            this.cleaner = v;
            this.dataSource = new MatTableDataSource(this.cleaner);
        });
    }

    deletItem(elem){
        this.cleaner.splice(this.crud.find('_id',elem._id,this.cleaner), 1);
        this.crud.delete('cleaner', elem._id, elem, ['cleaner']).then((v:any)=>{

            this.dataSource = new MatTableDataSource(this.cleaner);
        });
    }

}
