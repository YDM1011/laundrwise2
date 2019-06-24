import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'app-new-orders-step-sero',
  templateUrl: './new-orders-step-sero.component.html',
  styleUrls: ['./new-orders-step-sero.component.scss']
})
export class NewOrdersStepSeroComponent implements OnInit {
  public country = 'location';
  public company = 'company';
  public city = 'company';
  public step: number;
  public disableCity = new FormControl(true);
  public disableCompany = new FormControl(true);
  constructor(
      private router: Router,
      private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getStep.subscribe(( v: number ) => {
        this.step = v;
    });
  }
  countryChange(e) {
    this.disableCity = new FormControl(false);
    console.log(e.value);
  }
  cityChange(e) {
    this.disableCompany = new FormControl(false);
    console.log(e.value);
  }
  companyChange(e) {
    this.auth.setStep(this.step += 1);
    console.log(e.value);
  }
}
