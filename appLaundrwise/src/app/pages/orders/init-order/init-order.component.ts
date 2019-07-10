import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../auth.service';
import {CrudService} from '../../../crud.service';
import {StepZero, StepZeroObj} from "../new-orders-step-sero/stepZero";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-init-order',
  templateUrl: './init-order.component.html',
  styleUrls: ['./init-order.component.scss']
})
export class InitOrderComponent implements OnInit, OnChanges {
    public mainTotalPrice: number;
    public basketOrder = [];
    public step = 0;
    public chooseCompany;
    public allCompany;
    // public stepZero: StepZero = new StepZeroObj();
    constructor(
        private auth: AuthService,
        private crud: CrudService
    ) {

    }
    ngOnInit() {
      // this.auth.getStep.subscribe(( v: any ) => {
      //     this.step = v;
      // });
    }
    ngOnChanges() {}
    getChooseCompany(value) {
        this.chooseCompany = value;
    }
    getAllCompany(value) {
        this.allCompany = value;
    }
    outputArray(value) {
        // this.basketOrder = value;
        // console.log(this.basketOrder);
        // let sum = 0;
        // if (!value) return;
        // // value.forEach(v => {
        // //     sum += v.totalPrice;
        // // });
        // // this.mainTotalPrice = sum;
        // this.basketOrder = [];
        // value.map((obj:any) => {
        //     let o = Object.assign({}, obj);
        //     this.basketOrder.push( o );
        // });
        // return this.basketOrder;
        // // console.log(this.orderArray)
    }
}
