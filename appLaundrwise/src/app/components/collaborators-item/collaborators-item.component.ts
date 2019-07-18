import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {CrudService} from "../../crud.service";
import {NewCollaborator, NewCollaboratorObj} from "../../pages/profile/collaborators/newCollaborator";

@Component({
  selector: 'app-collaborators-item',
  templateUrl: './collaborators-item.component.html',
  styleUrls: ['./collaborators-item.component.scss']
})
export class CollaboratorsItemComponent implements OnInit {
  @Input() obj;
  @Input() idCleaner;
  public initDataCollab;
  public manadgerEdit: boolean = false;
  public collaborator: NewCollaborator = new NewCollaboratorObj();
  public isBlok: boolean = false;

  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.initDataCollab = this.obj;
    this.collaborator = Object.assign({}, this.obj);
  }
  editManager() {
    this.manadgerEdit = !this.manadgerEdit;

  }

  validate() {
    let isTrue = false;
    for (const key in this.collaborator) {
      if (this.initDataCollab[key] !== this.collaborator[key]) isTrue = true;
    }
    return isTrue;
  }

  btnBlok(is) {
    this.isBlok = is;
  }

  formCheck() {
    this.btnBlok(this.validate());
  }

  userSubmit() {
    // delete this.collaborator._id;
    this.crud.post('client', this.collaborator, this.collaborator._id, ['client']).then((v: any) => {
      this.collaborator = v;
      this.editManager();
      if (v) {
        this.obj = this.collaborator;

      }
    });
  }
  removeCollaborator() {
    this.crud.delete('client', this.obj._id, ['client']).then((v: any) => {
      this.obj = null;
    });
  }
}
