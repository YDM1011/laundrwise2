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

  public colors = [
      {pointBorderColor:'#45b7cd'},
      {pointBorderColor:'#ff6384'},
      {pointBorderColor:'#ff8e72'},
      {pointBorderColor:'#4aff38'},
      {pointBorderColor:'#665cff'}];
  public pieChartLabels = ['Active', 'Confirm', 'In progress', 'Washed', 'Done'];
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
          data: [],
          datasets: [{
              backgroundColor: ['#04DE41', '#13AAFF','#FF9A37','#FFC700','#C4C4C4'],
              borderColor: ['#04DE41', '#13AAFF','#FF9A37','#FFC700','#C4C4C4'],
              hoverBorderWidth: 2,
              hoverBackgroundColor: [
                  'rgba(4, 222, 65, 0.8)',
                  'rgba(19, 170, 255, 0.8)',
                  'rgba(255, 154, 55, 0.8)',
                  'rgba(255, 199, 0, 0.8)',
                  'rgba(196, 196, 196, 0.8)'],
              borderWidth: 0,
          }],
          all: 0,
          loaded: false
        };
        const query = JSON.stringify({cleanerOwner: item._id});
        this.crud.getNoCache(`basket/count?query=${query}`).then((v: any) => {
          obj['all'] = v.count;
          const query1 = JSON.stringify({cleanerOwner: item._id, status: 1});
          this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
            obj.data.push(v.count);
            const query2 = JSON.stringify({cleanerOwner: item._id, status: 2});
            this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
                obj.data.push(v.count);
                // obj.datasets.push({data:v.count});
                const query3 = JSON.stringify({cleanerOwner: item._id, status: 3});
                this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                    obj.data.push(v.count);
                    const query4 = JSON.stringify({cleanerOwner: item._id, status: 4});
                    this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                        obj.data.push(v.count);
                        const query5 = JSON.stringify({cleanerOwner: item._id, status: 5});
                        this.crud.getNoCache(`basket/count?query=${query5}`).then((v: any) => {
                            obj.data.push(v.count);
                            obj.loaded = true;
                            this.array.push(obj);
                        });
                    });
                });
            });
          });
        });
      });
    });
  }
}
