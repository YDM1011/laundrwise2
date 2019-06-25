import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from './post';
import {CrudService} from '../../../crud.service';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {ConfirgmDeleteComponent} from "../../../components/confirgm-delete/confirgm-delete.component";

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
      private crud: CrudService,
      public dialog: MatDialog
  ) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.crud.get('post').then((v: any) => {
      this.post = v;
      this.dataSource = new MatTableDataSource(this.post);
    });
  }
  openDialog(element) {
    const dialogRef = this.dialog.open(ConfirgmDeleteComponent, {
      width: '350px',
      data: 'Do you confirm the deletion?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.post.splice(this.crud.find('_id', element._id, this.post), 1);
        this.crud.delete('post', element._id).then(value => {
          this.dataSource = new MatTableDataSource(this.post);
        });
      }
    });
  }
}
