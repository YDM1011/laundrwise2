import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-new-orders-step-two',
  templateUrl: './new-orders-step-two.component.html',
  styleUrls: ['./new-orders-step-two.component.css']
})
export class NewOrdersStepTwoComponent implements OnInit {
  public me;
  public instruction: string;
  constructor(
      private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe((v: any) => {
      if (v) {
        this.me = v;
      }
    });
  }
}
