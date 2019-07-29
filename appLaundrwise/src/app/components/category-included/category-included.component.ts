import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from "@angular/material";
import {CrudService} from "../../crud.service";
import {Category} from "../../pages/admin/category-list/category";

@Component({
  selector: 'app-category-included',
  templateUrl: './category-included.component.html',
  styleUrls: ['./category-included.component.scss']
})
export class CategoryIncludedComponent implements OnInit {
  public category: Category[] = [];
  displayedColumns: string[] = ['title'];
  public dataSource = new MatTableDataSource();
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private crud: CrudService,
      public dialogRef: MatDialogRef<CategoryIncludedComponent>
  ) {  }

  ngOnInit() {
    let query = JSON.stringify({path: 'category', limit: 5, skip: 0});
    query = `?populate=${query}`;
    this.crud.getNoCache('cleaner', this.data._id, query).then((v: any) => {
        this.category = this.category.concat(v.category);
        this.dataSource = new MatTableDataSource(this.category);
    });
  }
  closeDialog() {
      this.dialogRef.close();
  }

}
