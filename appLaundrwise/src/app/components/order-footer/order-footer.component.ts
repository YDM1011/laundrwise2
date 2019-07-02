import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-order-footer',
  templateUrl: './order-footer.component.html',
  styleUrls: ['./order-footer.component.scss']
})
export class OrderFooterComponent implements OnInit, OnChanges {
  public step: number;
  @Input() mainTotalPrice;
  public sum = 0;
  public orderArray;
  public link: string = '/orders';
  public btns = ['', 'Your basket', 'Confirm order', 'Finish'];
  constructor(
      private auth: AuthService
  ) { }

  ngOnInit() {
    // this.clone(this.mainTotalPrice);
    // this.outputArray(this.orderArray);
    this.auth.getStep.subscribe(( v: number ) => {
      this.step = v;
      if (this.step === 3) {
        this.link = '/profile';
      }
    });
  }
  ngOnChanges() {
    // console.log('changes', this.mainTotalPrice);
    // if (this.mainTotalPrice) {
    //   this.clone(this.mainTotalPrice);
    //   this.outputArray(this.orderArray);
    // }
  }
  // clone(arr) {
  //   if (!arr) return;
  //   if (arr.length === 0) return;
  //   this.orderArray = [];
  //   arr.map(obj => {
  //     this.orderArray.push(Object.assign({}, obj));
  //   });
  // }
  // outputArray(value) {
  //   if (!value) return;
  //   let sum = 0;
  //   console.log(value);
  //   value.forEach(v => {
  //     sum += v.totalPrice;
  //   });
  //   this.sum = sum;
  //   console.log(this.sum);
  // }

  decrementStep() {
    this.auth.setStep(this.step -= 1);
  }

  incrementStep() {
    if (this.step === 3) {
      this.auth.setStep(0);
    }
    this.auth.setStep(this.step += 1);
  }

}
