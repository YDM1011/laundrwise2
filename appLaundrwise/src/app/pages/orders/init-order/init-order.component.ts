import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth.service';
import {CrudService} from '../../../crud.service';
import {StepZero, StepZeroObj} from "../new-orders-step-sero/stepZero";

@Component({
  selector: 'app-init-order',
  templateUrl: './init-order.component.html',
  styleUrls: ['./init-order.component.scss']
})
export class InitOrderComponent implements OnInit {

    public step = 0;
    public stepZero: StepZero = new StepZeroObj();
    constructor(
        private auth: AuthService,
        private crud: CrudService
    ) {

    }

  ngOnInit() {
      this.auth.getStep.subscribe(( v: any ) => {
          this.step = v;
      });
  }
  incrementStep() {
        this.auth.setStep(this.step += 1);
  }
    handleValue(value) {
        this.stepZero = value;
        console.log(this.stepZero);
    }
}
