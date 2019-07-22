import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-init-order',
  templateUrl: './init-order.component.html',
  styleUrls: ['./init-order.component.scss']
})
export class InitOrderComponent implements OnInit, OnChanges {
    public basketOrder = [];
    public step = 1;
    public chooseCompany;
    public allCompany;
    constructor(
        private auth: AuthService
    ) {}
    ngOnInit() {
        // subscribe me
        // get
        // subscribe for allCompany
        this.auth.onCleaners.subscribe((v: any) => {
            if (v && v.length > 0) {
                this.allCompany = Object.assign([], v) ;
                this.chooseCompany = Object.assign({}, this.allCompany[0]);
            } else {
                this.step = 0;
            }
        });
    }
    ngOnChanges() {}
    getChooseCompany(value) {
        if (!value) return;
        this.chooseCompany = Object.assign({}, value) ;
    }
    getAllCompany(value) {
        if (!value) return;
        this.allCompany = Object.assign([], value);
    }
}
