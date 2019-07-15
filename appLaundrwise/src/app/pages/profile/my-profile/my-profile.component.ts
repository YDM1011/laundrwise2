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
  public allOrders: any;
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
    const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
    const query = JSON.stringify({'createdBy.itemId': this.user._id, cleanerOwner: { $exists: true }, status: {$ne: 0}});
    this.crud.getNoCache(`basket?query=${query}&populate=${populate}`).then((v: any) => {
      this.allOrders = v;
    });
  }
}
