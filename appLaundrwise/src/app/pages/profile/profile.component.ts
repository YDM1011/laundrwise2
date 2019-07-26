import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {CrudService} from "../../crud.service";
import Swal from "sweetalert2";
import {WebsocketService} from "../../websocket";
import {WS} from "../../websocket/websocket.events";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {
    public userName: string;
    public user: any;
    public cleaner: any;
    public setting: any;
    public money = 0;
    public withdrow: number;
    public showWithdrow: boolean = false;
    constructor(
        private auth: AuthService,
        private crud: CrudService,
        private wsService: WebsocketService
    ) {}
    ngOnChanges() {
    }
    ngOnInit() {
        this.auth.onSettings.subscribe((v: any) => {
            if (!v) return;
            this.setting = v;
        });
        this.auth.onUpDate.subscribe(( v: any ) => {
            if (v) {
                this.user = v;
                this.userName = Object(v).firstName + ' ' + Object(v).lastName;
                if (this.user.role && this.user.role === 'superManagerCleaner') {
                    const query = JSON.stringify({superManager: this.user._id});
                    this.crud.getNoCache(`cleaner?query=${query}`).then((v: any) => {
                        this.cleaner = v[0];
                        const cash = this.cleaner.money.totalMoney;
                        this.money = cash - cash * this.setting.percentage / 100;
                    });
                }
            }
        });
    }
    show() {
       this.showWithdrow = !this.showWithdrow;
    }
    sendRequest() {
        const obj = {
            name: this.user.firstName + this.user.lastName,
            mes: 'I want withdraw money ' + this.withdrow + '$',
            email: this.cleaner.name,
            entity: 'cleaners'
        };
        if (!obj.mes) {
            return Swal.fire('Something broken', '', 'error');
        } else {
            this.crud.post('adminNotification', obj, null, false, false).then((value) => {
                this.wsService.send(WS.SEND.NOTIFICATION, 'admin',  { data: obj.entity });
                Swal.fire('Success', 'Message sended', 'success');
                if (value) {
                    const minusWithPercentage = this.withdrow + this.withdrow / 100 * this.setting.percentage;
                    const minus = this.cleaner.money.totalMoney - minusWithPercentage;
                    this.crud.post(`cleaner`, {money: {totalMoney: minus}}, this.cleaner._id, false, false).then((v: any) => {
                        this.withdrow = 0;
                        this.show();
                        this.cleaner.money['totalMoney'] = this.money - this.withdrow;
                        this.money = this.money - this.withdrow;
                    });
                }
            });
        }
    }
}
