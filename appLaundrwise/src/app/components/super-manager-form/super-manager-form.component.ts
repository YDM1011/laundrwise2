import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CrudService} from "../../crud.service";
import {Manager, ManagerObj} from "./manager";
import Swal from "sweetalert2";

@Component({
  selector: 'app-super-manager-form',
  templateUrl: './super-manager-form.component.html',
  styleUrls: ['./super-manager-form.component.scss']
})
export class SuperManagerFormComponent implements OnInit {
  public manager: Manager = new ManagerObj();
  @Output() output: EventEmitter<any> = new EventEmitter();
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private crud: CrudService,
      public dialogRef: MatDialogRef<SuperManagerFormComponent>
  ) { }

  ngOnInit() {
  }

  addPost() {
    if (!this.manager.login || !this.manager.pass || !this.manager.firstName || !this.manager.lastName) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'All field required'
      });
    } else {
      let api = 'cleaner';
      if (this.data.role) {
        this.manager.role = this.data.role;
        api = 'delivery';
      }
      this.crud.post(api, {manager: this.manager}, this.data._id).then((v : any) => {
        this.dialogRef.close();
      }).catch(e => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'login already taken'
        });
      });
      this.dialogRef.close();
    }
  }

}
