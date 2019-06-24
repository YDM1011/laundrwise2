import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  public step: number;
  constructor(
      private auth: AuthService,
  ) { }

  ngOnInit() {
  }
  closeOrder() {
    this.auth.setStep(0);
  }
}
