import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from './post';
import {CrudService} from '../../../crud.service';
import {MatSort, MatTableDataSource} from '@angular/material';



// export interface PeriodicElement {
//   title: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
//
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, title: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, title: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, title: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, title: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, title: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, title: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, title: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, title: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, title: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, title: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})


export class PostComponent implements OnInit {
  public post: Post[];
  public displayedColumns: string[] = ['title', 'data'];
  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.get('post').then((v: any) => {
      this.post = v;
      this.dataSource = new MatTableDataSource(v);
      console.log(this.post);
    });

    this.dataSource.sort = this.sort;
  }

}
