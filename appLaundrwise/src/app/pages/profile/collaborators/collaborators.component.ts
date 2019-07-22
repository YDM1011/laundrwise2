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
  public initManager: any[];
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
        const populate = JSON.stringify({path: 'managers'});
        this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((clen: any) => {
          this.cleaner = clen[0];
          if (clen && clen[0].managers.length > 0) {
            this.initManager = Object.assign([], clen[0].managers);
          }
        });
      }
    });
  }

  addCollaborators() {
    this.newColab.role = 'managerCleaner';
    delete this.newColab._id;
    this.crud.post('cleaner', {manager: this.newColab}, this.cleaner._id, false, true).then((v: any) => {
      this.newColab = new NewCollaboratorObj();
      this.initManager.push(v);
      this.newColabIfFunc();
    });
  }

  newColabIfFunc() {
    this.newColabIf = !this.newColabIf;
  }
}
