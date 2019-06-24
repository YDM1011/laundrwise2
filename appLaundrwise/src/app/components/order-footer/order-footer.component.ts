import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-order-footer',
  templateUrl: './order-footer.component.html',
  styleUrls: ['./order-footer.component.scss']
})
export class OrderFooterComponent implements OnInit {
  public step: number;
  public totalPrice: number = 0;
  public btns = ['', 'Your basket', 'Payment system', 'Finish'];
  constructor(
      private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getStep.subscribe(( v: number ) => {
      this.step = v;
    });
  }

  decrementStep() {
    this.auth.setStep(this.step -= 1);
  }

  incrementStep() {
    this.auth.setStep(this.step += 1);
  }

}
