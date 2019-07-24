import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../crud.service";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {
  public user: any;
  public cleaner: any;
  public pieChartLabels = ['All Orders', 'New', 'Waiting', 'Done', ];
  public pieChartData = [];
  public pieChartType = 'pie';
  public loading: boolean = false;
  constructor(
      private crud: CrudService,
      private auth: AuthService
  ) { }
  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        if (this.user.role === 'superManagerCleaner') {
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`cleaner?query=${query}`).then((v: any) => {
            this.cleaner = v[0];
            const query2 = JSON.stringify({'cleanerOwner': this.cleaner._id});
            this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query5 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: 1} );
              this.crud.getNoCache(`basket/count?query=${query5}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query4 = JSON.stringify({'cleanerOwner': this.cleaner._id, $or: [{status: 2}, {status: 3}, {status: 4}]} );
                this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                  const query3 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: 5} );
                  this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                    this.pieChartData.push(v.count);
                    this.loading = true;
                  });
                });
              });
            });
          });
        }
        if (this.user.role === 'superManagerDelivery') {
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`delivery?query=${query}`).then((v: any) => {
            this.cleaner = v[0];
            const query2 = JSON.stringify({'deliveryOwner': this.cleaner._id});
            this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query5 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 1} );
              this.crud.getNoCache(`basket/count?query=${query5}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query4 = JSON.stringify({'deliveryOwner': this.cleaner._id, $or: [{status: 2}, {status: 3}, {status: 4}]} );
                this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                  const query3 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 5} );
                  this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                    this.pieChartData.push(v.count);
                    this.loading = true;
                  });
                });
              });
            });
          });
        }
        if (this.user.role === 'managerCleaner') {
          // const query = JSON.stringify({'_id': this.user._id});
          this.crud.getNoCache(`actionLog/${this.user.loger}`).then((v: any) => {
            this.pieChartData.push(v.ordersCount);
            this.loading = true;

            // const populate = JSON.stringify({path: 'orders', select: { status: 5}});
            // this.crud.getNoCache(`actionLog/${this.user.loger}?query={}&populate=${populate}`).then((v: any) => {
            //   this.pieChartData.push(v.count);
            // });

            // const query2 = JSON.stringify({'deliveryOwner': this.cleaner._id});
            // this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
            //   this.pieChartData.push(v.count);
            //   const query5 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 1} );
            //   this.crud.getNoCache(`basket/count?query=${query5}`).then((v: any) => {
            //     this.pieChartData.push(v.count);
            //     const query4 = JSON.stringify({'deliveryOwner': this.cleaner._id, $or: [{status: 2}, {status: 3}, {status: 4}]} );
            //     this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
            //       this.pieChartData.push(v.count);
            //       const query3 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 5} );
            //       this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
            //         this.pieChartData.push(v.count);
            //         this.loading = true;
            //       });
            //     });
            //   });
            // });
          });
        }
      }
    });
  }
}
