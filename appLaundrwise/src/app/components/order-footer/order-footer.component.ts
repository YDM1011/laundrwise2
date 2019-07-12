import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-order-footer',
  templateUrl: './order-footer.component.html',
  styleUrls: ['./order-footer.component.scss']
})
export class OrderFooterComponent implements OnInit, OnChanges {
  @Input() mainTotalPrice;
  @Input() step;
  @Output() stepChange = new EventEmitter();
  // public sum = 0;
  public order: any = null;
  public isValidOrder:boolean = false;
  public link: string = '/orders';
  public btns = ['', 'Your basket', 'Confirm order', 'Finish'];
  constructor(
      private auth: AuthService
  ) { }

  ngOnInit() {
    // this.clone(this.mainTotalPrice);
    // this.outputArray(this.orderArray);
      if (this.step === 3) {
          this.link = '/profile';
      }
      this.auth.onOrderConfirm.subscribe((v:any)=>{
        if (v) {
          console.log(v)
            this.order = v
            if (this.order.basket.length==0 ||
                !this.order.orderInfo.address1 ||
                !this.order.orderInfo.dp1 ||
                !this.order.orderInfo.dp2){
                this.isValidOrder = false
            } else {
                this.isValidOrder = true
            }
        }
      })
  }
  ngOnChanges() {
    console.log(this.order)
      // if ( ) {
          if (this.order && (this.order.basket.length == 0 ||
              !this.order.orderInfo.address1 ||
              !this.order.orderInfo.dp1 ||
              !this.order.orderInfo.dp2)) {
              this.isValidOrder = false
          } else {
              this.isValidOrder = true
          }
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
    this.step -= 1;
    this.stepChange.emit(this.step)
  }

  incrementStep() {
    // if (this.step === 3) {
    //   this.auth.setStep(0);
    // }
    // this.auth.setStep(this.step += 1);
    this.step += 1;
    this.stepChange.emit(this.step)
  }

}
