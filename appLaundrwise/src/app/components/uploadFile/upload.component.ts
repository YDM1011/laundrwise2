import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from "@angular/material";
import { UploadService } from "./upload.service";
import { DialogComponent } from "./dialog/dialog.component";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit{

  @Output() onFs = new EventEmitter();

  constructor(public dialog: MatDialog,
              public uploadService: UploadService) {}
  ngOnInit(){
    this.uploadService.onFs.subscribe(v=>{
      if(v){
          this.onFs.emit(v);
      }
    })
  }
  openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }

}