import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public array: any = [];
  public settigns: any;
  public pieChartType = 'pie';
  public pieChartLabels = ['All Orders', 'Done', 'Profit$'];
  public loading: boolean = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.getNoCache('setting').then((v: any) => {
      this.settigns = Object.assign({}, v);
    });
    this.crud.getNoCache('cleaner').then((v: any) => {
      v.forEach((item, index) => {
        let obj = {
          name: item.name,
          result: [],
        };
        const query = JSON.stringify({cleanerOwner: item._id});
        this.crud.getNoCache(`basket/count?query=${query}`).then((v: any) => {
          obj.result.push(v.count);
          const query2 = JSON.stringify({cleanerOwner: item._id, status: 5});
          this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
            obj.result.push(v.count);
            if (item && item.money) {
              obj.result.push(item.money.totalMoney - item.money.totalMoney * this.settigns.percentage / 100) ;
            } else {
              obj.result.push(0);
            }
            this.array.push(obj);

          });
        });
        if (v.length === index + 1) {
          console.log(this.array);
          this.loading = true;
        }
      })
    })
  }

}
