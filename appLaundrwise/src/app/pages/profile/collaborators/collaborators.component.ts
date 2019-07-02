import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../crud.service";
import {NewCollaborator, NewCollaboratorObj} from "./newCollaborator";
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  public newColab: NewCollaborator = new NewCollaboratorObj();
  public newColabIf: boolean = false;
  public user: any;
  public cleaner;
  public initManager: [];
  public manadgerEdit: boolean = false;
  constructor(
      private crud: CrudService,
      private auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        const query = JSON.stringify({
          superManager: this.user._id
        });
        const populate = JSON.stringify({path: 'managers', skip: 0, limit: 0});

        this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((v: any) => {
          this.cleaner = v[0];
          this.initManager = v[0].managers;
          console.log(this.initManager);
        });
      }
    });

  }

  addCollaborators() {
    this.newColab.role = 'managerCleaner';
    this.crud.post('cleaner', {manager: this.newColab}, this.cleaner._id, ['cleaner']).then(v => {
      this.newColab = new NewCollaboratorObj();
      this.newColabIfFunc();
    });
  }

  newColabIfFunc() {
    this.newColabIf = !this.newColabIf;
  }

  editManager() {
    this.manadgerEdit = !this.manadgerEdit;
  }

}
