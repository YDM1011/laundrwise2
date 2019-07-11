import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-orders-step-two',
  templateUrl: './new-orders-step-two.component.html',
  styleUrls: ['./new-orders-step-two.component.css']
})
export class NewOrdersStepTwoComponent implements OnInit, OnChanges {
  public me;
  public basketArray = [];
  public instruction: string;
  constructor(
      private router: Router,
      private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe((v: any) => {
      if (v) {
        this.me = v;
      }
    });
    // this.auth.getBasketGroup.subscribe((v: any) => {
    //   this.basketArray = v;
    //   console.log(this.basketArray);
    // });
    //   this.router.navigate([`/orders`]);
  }
  ngOnChanges() {
  }
}
