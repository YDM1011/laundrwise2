import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth.service";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public user: any;
  public cleaner: any;
  public allOrdersUser: any;
  public allOrdersManager: any = [];
  constructor(
      private auth: AuthService,
      private crud: CrudService
  ) { }
  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
      }
    });
    if (this.user.role === 'client' || !this.user.role) {
      const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
      const query = JSON.stringify({'createdBy.itemId': this.user._id, cleanerOwner: { $exists: true }, status: {$ne: 0}});
      this.crud.getNoCache(`basket?query=${query}&populate=${populate}`).then((v: any) => {
        this.allOrdersUser = v;
      });
    }
    if (this.user.role === 'superManagerCleaner') {
      // const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
      const query = JSON.stringify({'superManager': this.user._id});
      this.crud.getNoCache(`cleaner?query=${query}`).then((cleaner: any) => {
        this.cleaner = cleaner[0];
        if (cleaner[0]) {
          const populate1 = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
          const query1 = JSON.stringify({'cleanerOwner': this.cleaner._id});
          this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}`).then((basket: any) => {
            this.allOrdersManager = basket;
          });
        }
      });
    }
  }
}
