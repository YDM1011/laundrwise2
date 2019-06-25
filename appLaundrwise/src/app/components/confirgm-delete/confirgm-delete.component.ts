import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-confirgm-delete',
  templateUrl: './confirgm-delete.component.html',
  styleUrls: ['./confirgm-delete.component.scss']
})
export class ConfirgmDeleteComponent implements OnInit {
  constructor(
      public dialogRef: MatDialogRef<ConfirgmDeleteComponent>,
      @Inject(MAT_DIALOG_DATA) public message: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
