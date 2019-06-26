import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from './post';
import {CrudService} from '../../../crud.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})


export class PostComponent implements OnInit {
  public post: Post[];
  public displayedColumns: string[] = ['title', 'data', '_id', 'delete'];
  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.get('post').then((v: any) => {
      this.post = v;
      this.dataSource = new MatTableDataSource(this.post);
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  delete(element) {
    const apiData = 'post';
    this.crud.delete(apiData, element._id).then((v: any) => {
      this.post.splice(this.crud.find('_id', element._id, this.post), 1);
      this.dataSource = new MatTableDataSource(this.post);
    });
  }
}
