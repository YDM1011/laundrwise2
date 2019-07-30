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
  public pieChartLabels = ['New', 'Confirm', 'In Progress', 'Washed', 'Done', ];
  public pieChartData = [];
  public pieChartType = 'pie';
  public loading: boolean = false;
  public obj: any;
  constructor(
      private crud: CrudService,
      private auth: AuthService
  ) { }
  ngOnInit() {
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        if (this.user.role === 'superManagerCleaner') {
          this.obj = {
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
            }]
          };
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`cleaner?query=${query}`).then((v: any) => {
            this.cleaner = v[0];
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
                            this.obj.data = this.pieChartData;
                            this.loading = true;
                        });
                    });
                  });
                });
              });
          });
        }

        if (this.user.role === 'superManagerDelivery') {
          this.obj = {
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
            }]
          };
          this.pieChartLabels = ['New', 'In cleaner', 'Collect and give away', 'Done'];
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`delivery?query=${query}`).then((v: any) => {
            this.cleaner = v[0];
            const query2 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 2});
            this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query5 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 3} );
              this.crud.getNoCache(`basket/count?query=${query5}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query4 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 4} );
                this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                  const query3 = JSON.stringify({'deliveryOwner': this.cleaner._id, status: 5} );
                  this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                    this.pieChartData.push(v.count);
                    this.obj.data = this.pieChartData;
                    this.loading = true;
                  });
                });
              });
            });
          });
        }
        if (this.user.role === 'managerCleaner') {
          this.obj = {
            data: [],
            datasets: [{
              backgroundColor: ['#13AAFF', '#FF9A37', '#FFC700', '#C4C4C4'],
              borderColor: ['#13AAFF', '#FF9A37', '#FFC700', '#C4C4C4'],
              hoverBorderWidth: 2,
              hoverBackgroundColor: [
                'rgba(19, 170, 255, 0.8)',
                'rgba(255, 154, 55, 0.8)',
                'rgba(255, 199, 0, 0.8)',
                'rgba(196, 196, 196, 0.8)'],
              borderWidth: 0,
            }]
        };
        this.pieChartLabels = ['Confirm', 'In progress', 'Washed', 'Done'];
          const query1 = JSON.stringify({'managerCleanerOwner': this.user._id, status: 2});
          this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
            this.pieChartData.push(v.count);
            const query2 = JSON.stringify({'managerCleanerOwner': this.user._id, status: 3});
            this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query3 = JSON.stringify({'managerCleanerOwner': this.user._id, status: 4});
              this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query4 = JSON.stringify({'managerCleanerOwner': this.user._id, status: 5});
                this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                  this.obj.data = this.pieChartData;
                  this.loading = true;
                });
              });
            });
          });
        }
        if (this.user.role === 'managerDelivery') {
          this.obj = {
            data: [],
            datasets: [{
              backgroundColor: ['#13AAFF','#FF9A37','#FFC700','#C4C4C4'],
              borderColor: ['#13AAFF', '#FF9A37','#FFC700','#C4C4C4'],
              hoverBorderWidth: 2,
              hoverBackgroundColor: [
                'rgba(19, 170, 255, 0.8)',
                'rgba(255, 154, 55, 0.8)',
                'rgba(255, 199, 0, 0.8)',
                'rgba(196, 196, 196, 0.8)'],
              borderWidth: 0,
            }]
          };
          this.pieChartLabels = ['New', 'In cleaner', 'Collect and give away', 'Done'];
            const query1 = JSON.stringify({'managerDeliveryOwner': this.user._id, status: 2});
            this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
              this.pieChartData.push(v.count);
              const query2 = JSON.stringify({'managerDeliveryOwner': this.user._id, status: 3});
              this.crud.getNoCache(`basket/count?query=${query2}`).then((v: any) => {
                this.pieChartData.push(v.count);
                const query3 = JSON.stringify({'managerDeliveryOwner': this.user._id, status: 4});
                this.crud.getNoCache(`basket/count?query=${query3}`).then((v: any) => {
                  this.pieChartData.push(v.count);
                    const query4 = JSON.stringify({'managerDeliveryOwner': this.user._id, status: 5});
                    this.crud.getNoCache(`basket/count?query=${query4}`).then((v: any) => {
                      this.pieChartData.push(v.count);
                      this.obj.data = this.pieChartData;
                      this.loading = true;
                    });
                });
              });
            });
        }
      }
    });
  }
}
