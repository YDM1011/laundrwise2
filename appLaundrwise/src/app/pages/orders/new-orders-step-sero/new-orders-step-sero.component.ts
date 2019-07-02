import {Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../../auth.service";
import {StepZero, StepZeroObj} from "./stepZero";
import {MatTableDataSource} from "@angular/material";
import {CrudService} from "../../../crud.service";

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
  public step1Completed: boolean = false;
  public step2Completed: boolean = false;
  public step3Completed: boolean = false;
  public disableCity = new FormControl(true);
  public disableCompany = new FormControl(true);
  @Output() public myOutput: EventEmitter<any> = new EventEmitter();
  public outputObj: StepZero = new StepZeroObj();
  public allCleaners: any;

  constructor(
      private router: Router,
      private auth: AuthService,
      private crud: CrudService
  ) { }
  ngOnInit() {
    // const query = JSON.stringify({path: '', skip: 0, limit: 0});
    // this.crud.get(`cleaner?populate=${query}`).then((v: any) => {
    //   this.allCleaners = v;
    // });
    this.auth.getStep.subscribe(( v: number ) => {
        this.step = v;
    });
  }
  countryChange(e) {
    this.disableCity = new FormControl(false);
    this.step1Completed = true;
    this.outputObj.country = e.value;
  }
  cityChange(e) {
    this.disableCompany = new FormControl(false);
    this.step2Completed = true;
    this.outputObj.city = e.value;
  }
  public companyChange(e) {
    this.auth.setStep(this.step += 1);
    this.outputObj.company = e.value;
    this.sendOutEvent(this.outputObj);
  }
  sendOutEvent(value) {
    this.myOutput.emit(value);
  }
}
