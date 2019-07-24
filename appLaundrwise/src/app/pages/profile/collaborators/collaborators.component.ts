import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../crud.service";
import {NewCollaborator, NewCollaboratorObj} from "./newCollaborator";
import {AuthService} from "../../../auth.service";
import Swal from "sweetalert2";

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
        if (this.user.role === 'superManagerDelivery') {
          const query = JSON.stringify({
            superManager: this.user._id
          });
          const populate = JSON.stringify({path: 'managers'});
          this.crud.getNoCache(`delivery?query=${query}&populate=${populate}`).then((clen: any) => {
            this.cleaner = clen[0];
            if (clen[0] && (clen[0].managers.length > 0)) {
              this.initManager = Object.assign([], clen[0].managers);
            }
          });
        }
        if (this.user.role === 'superManagerCleaner') {
          const query = JSON.stringify({
            superManager: this.user._id
          });
          const populate = JSON.stringify({path: 'managers'});
          this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((clen: any) => {
            this.cleaner = clen[0];
            if (clen[0] && (clen[0].managers.length > 0)) {
              this.initManager = Object.assign([], clen[0].managers);
            }
          });
        }
      }
    });
  }

  addCollaborators() {
    if (!this.newColab.login || !this.newColab.pass || !this.newColab.firstName || !this.newColab.lastName ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'All field required'
      });
    } else {
      if (this.user.role === 'superManagerCleaner') {
        delete this.newColab._id;
        this.newColab.role = 'managerCleaner';
        this.crud.post('cleaner', {manager: this.newColab}, this.cleaner._id, false, true).then((v: any) => {
          this.initManager.push(v);
          this.newColab = new NewCollaboratorObj();
          this.newColabIfFunc();
        });
      }
      if (this.user.role === 'superManagerDelivery') {
        delete this.newColab._id;
        this.newColab.role = 'managerDelivery';
        this.crud.post('delivery', {manager: this.newColab}, this.cleaner._id, false, true).then((v: any) => {
          this.initManager.push(v);
          this.newColab = new NewCollaboratorObj();
          this.newColabIfFunc();
        });
      }
    }
  }

  newColabIfFunc() {
    this.newColabIf = !this.newColabIf;
  }
}
