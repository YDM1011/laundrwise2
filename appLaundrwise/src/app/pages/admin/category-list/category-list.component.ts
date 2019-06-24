import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {Category, CategoryObj} from "./category";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
    public dataSource = new MatTableDataSource();
    public displayedColumns: string[] = ['select','name','date','edit','del'];
    public category: Category[];
    @Input() iframe = false;
    @Input() useCategory = null;
    @Output() onCategory = new EventEmitter();
    constructor(
        private crud: CrudService
    ) { }

    ngOnInit() {
        if (this.iframe){
            this.displayedColumns = ['select','name','date'];
        } else {
            this.displayedColumns = ['name','date','edit','del'];
        }
        this.crud.get('category').then((v:any)=>{
            this.category = v;
            if (this.iframe && this.useCategory){
                this.category.map((item:any)=>{
                    if(this.useCategory.indexOf(item._id) > -1){
                        item.checked = true
                    } else {
                        item.checked = false
                    }
                })
            }
            this.dataSource = new MatTableDataSource(this.category);
        });
    }

    deletItem(elem){
        this.category.splice(this.crud.find('_id',elem._id,this.category), 1);
        this.crud.delete('category', elem._id, elem, ['category']).then((v:any)=>{
            this.dataSource = new MatTableDataSource(this.category);
        });
    }

    pushCategory(){
        let arr = [];
        this.category.map(item=>{
            if(item.checked){
                arr.push(item)
            }
        });
        this.onCategory.emit(arr);
    }

}