import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../crud.service";

@Component({
  selector: 'app-profile-order',
  templateUrl: './profile-order.component.html',
  styleUrls: ['./profile-order.component.scss']
})
export class ProfileOrderComponent implements OnInit {
  @Input() obj;
  @Input() cleaner;
  @Input() role;
  public managerChoose: string;
  public modal: boolean =  false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
  }
  assigneToManager() {
    const obj = {
      status: 2,
      managerCleanerOwner: this.managerChoose
    };
    this.crud.post('basket', obj, this.obj._id).then((v: any) => {
      this.openModal();
    });
  }
  openModal() {
    this.modal = !this.modal;
  }
}
