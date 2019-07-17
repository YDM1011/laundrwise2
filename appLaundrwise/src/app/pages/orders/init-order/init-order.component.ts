import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-init-order',
  templateUrl: './init-order.component.html',
  styleUrls: ['./init-order.component.scss']
})
export class InitOrderComponent implements OnInit, OnChanges {
    public basketOrder = [];
    public step = 0;
    public chooseCompany;
    public allCompany;
    constructor() {}
    ngOnInit() {
    }
    ngOnChanges() {}
    getChooseCompany(value) {
        this.chooseCompany = Object.assign({}, value) ;
    }
    getAllCompany(value) {
        this.allCompany = Object.assign([], value);
    }
}
