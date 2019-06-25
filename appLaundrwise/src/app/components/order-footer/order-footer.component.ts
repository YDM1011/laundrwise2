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
  public link: string = '/orders';
  public btns = ['', 'Your basket', 'Confirm order', 'Finish'];
  constructor(
      private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getStep.subscribe(( v: number ) => {
      this.step = v;
      if (this.step === 2) {
        this.link = '/profile';
      }
    });
  }

  decrementStep() {
    this.auth.setStep(this.step -= 1);
  }

  incrementStep() {
    if (this.step === 2) {
      this.auth.setStep(0);
    }
    this.auth.setStep(this.step += 1);
  }

}
