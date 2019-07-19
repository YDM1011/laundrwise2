import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CrudService} from "../../crud.service";
import {Manager, ManagerObj} from "./manager";

@Component({
  selector: 'app-super-manager-form',
  templateUrl: './super-manager-form.component.html',
  styleUrls: ['./super-manager-form.component.scss']
})
export class SuperManagerFormComponent implements OnInit {
  public manager: Manager = new ManagerObj();
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private crud: CrudService,
      public dialogRef: MatDialogRef<SuperManagerFormComponent>
  ) { }

  ngOnInit() {
  }

  addPost() {
    // console.log(this.data, this.manager);
    let api = 'cleaner';
    if (this.data.role) {
        this.manager.role = this.data.role;
        api = 'delivery';
    }
    this.crud.post(api, {manager: this.manager}, this.data._id);
    this.dialogRef.close();
  }

}
