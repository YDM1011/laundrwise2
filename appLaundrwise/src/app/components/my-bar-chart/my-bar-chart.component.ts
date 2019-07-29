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
  public pieChartLabels = ['New', 'In Progress', 'Waiting', 'Washed', 'Done', ];
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
            // const query2 = JSON.stringify({'cleanerOwner': this.cleaner._id});
            // this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
            //   this.pieChartData.push(v.count);
              const query1 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: 1} );
              this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query2 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: 2} );
                this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                  const query3 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: 3} );
                  this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                    this.pieChartData.push(v.count);
                    const query4 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: 4} );
                    this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                      this.pieChartData.push(v.count);
                        const query5 = JSON.stringify({'cleanerOwner': this.user._id, status: 5});
                        this.crud.getNoCache(`basket/count?query=${query5}`).then((v: any) => {
                            this.pieChartData.push(v.count);
                            this.loading = true;
                        });
                    });
                  });
                });
              });
            // });
          });
        }

        if (this.user.role === 'superManagerDelivery') {
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`delivery?query=${query}`).then((v: any) => {
            this.cleaner = v[0];
            const query2 = JSON.stringify({'deliveryOwner': this.cleaner._id});
            this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query5 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 2} );
              this.crud.getNoCache(`basket/count?query=${query5}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query4 = JSON.stringify({'deliveryOwner': this.cleaner._id, $or: [ {status: 3}, {status: 4}]} );
                this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                  const query3 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 5} );
                  this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                    this.pieChartData.push(v.count);
                      this.pieChartData.push(v.count);
                      const query4 = JSON.stringify({'deliveryOwner': this.user._id, status: 4});
                      this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                          this.pieChartData.push(v.count);
                          this.loading = true;
                      });
                  });
                });
              });
            });
          });
        }
        if (this.user.role === 'managerCleaner') {
          const query = JSON.stringify({'managerCleanerOwner': this.user._id});
          // this.crud.getNoCache(`basket/count?query=${query}`).then((v: any) => {
          //   this.pieChartData.push(v.count);
            this.pieChartLabels = ['In Progress', 'Waiting', 'Washed', 'Done'];
            const query1 = JSON.stringify({'managerCleanerOwner': this.user._id, status: 2});
            this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query2 = JSON.stringify({'managerCleanerOwner': this.user._id,status: 3});
              this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query3 = JSON.stringify({'managerCleanerOwner': this.user._id, status: 4});
                this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                  const query4 = JSON.stringify({'managerCleanerOwner': this.user._id, status: 5});
                  this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                    this.pieChartData.push(v.count);
                    this.loading = true;
                  });
                });
              });
            });
          // });
        }
        if (this.user.role === 'managerDelivery') {
          const query = JSON.stringify({'managerDeliveryOwner': this.user._id});
          // this.crud.getNoCache(`basket/count?query=${query}`).then((v: any) => {
          //   this.pieChartData.push(v.count);
            const query1 = JSON.stringify({'managerDeliveryOwner': this.user._id, status: 2});
            this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query2 = JSON.stringify({'managerDeliveryOwner': this.user._id, $or: [{status: 3}, {status: 4}]});
              this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query3 = JSON.stringify({'managerDeliveryOwner': this.user._id, status: 5});
                this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                    this.pieChartData.push(v.count);
                    const query4 = JSON.stringify({'managerDeliveryOwner': this.user._id, status: 4});
                    this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                        this.pieChartData.push(v.count);
                        this.loading = true;
                    });
                });
              });
            });
          // });
        }
      }
    });
  }
}
