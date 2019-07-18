import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../../auth.service";
import {CrudService} from "../../../crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, OnChanges {
  public user: any;
  public cleaner: any;
  public allOrdersUser: any = [];
  public allOrdersSuperManager: any = [];
  public allOrdersManager: any = [];
  public managers: any = [];
  public countOrders = {
    all: 0,
    new: 0,
    waiting: 0,
    done: 0
  };
  public loading: boolean = false;
  constructor(
      private auth: AuthService,
      private crud: CrudService,
      private router: Router,
  ) { }
  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        if (this.user.role === 'client' || !this.user.role) {
          const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
          const query = JSON.stringify({'createdBy.itemId': this.user._id, cleanerOwner: { $exists: true }, status: {$ne: 0}});
          this.crud.getNoCache(`basket?query=${query}&populate=${populate}&sort={"date": "-1"}`).then((v: any) => {
            this.allOrdersUser = v;
            this.loading = true;
          });
        }
        if (this.user.role === 'superManagerCleaner') {
          this.router.navigate(['/profile/all']);
          const populate = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((cleaner: any) => {
            this.cleaner = cleaner[0];
            this.getCount(this.cleaner._id);
            this.loading = true;
            // if (cleaner[0]) {
            //   const populate1 = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
            //   const query1 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: {$ne: 0}});
            //   this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}&sort={"date": "-1"}`).then((basket: any) => {
            //     this.allOrdersSuperManager = basket;
            //   });
            // }
          });
        }
        if (this.user.role === 'managerCleaner') {
          const populate = JSON.stringify({path: 'ordersOpen', populate: {path: 'products'}});
          this.crud.getNoCache(`actionLog/${this.user.loger}?populate=${populate}`).then((log: any) => {
            this.allOrdersManager = log.ordersOpen;
            this.loading = true;
          });
        }
      }
    });
  }
  ngOnChanges() {
    if (this.user.role === 'superManagerCleaner') {
      this.router.navigate(['/profile/all']);
    }
  }
  getCount(id) {
    this.crud.get(`basket/count?query={"cleanerOwner":"${id}"}&select=_id`).then((v: any) => {
      this.countOrders['all'] = v.count;
    });
    this.crud.get(`basket/count?query={"cleanerOwner":"${id}", "status": "1"}&select=_id`).then((v: any) => {
      this.countOrders['new'] = v.count;
    });
    const queryWaiting = JSON.stringify({'cleanerOwner': id, $or: [{status: 2}, {status: 3}, {status: 4}]});
    this.crud.get(`basket/count?query=${queryWaiting}`).then((v: any) => {
      this.countOrders['waiting'] = v.count;
    });
    this.crud.get(`basket/count?query={"cleanerOwner":"${id}", "status":"5"}&select=_id`).then((v: any) => {
      this.countOrders['done'] = v.count;
    });
  }
}
