import {Component, EventEmitter, OnChanges, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../../auth.service";
import {StepZero, StepZeroObj} from "./stepZero";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-new-orders-step-sero',
  templateUrl: './new-orders-step-sero.component.html',
  styleUrls: ['./new-orders-step-sero.component.scss']
})
export class NewOrdersStepSeroComponent implements OnInit {
  // public country = 'location';
  public company = '';
  // public city = 'company';
  public step: number;
  public step1Completed: boolean = false;
  public canOpen: boolean = false;
  public step2Completed: boolean = false;
  // public step3Completed: boolean = false;
  public disableCity = new FormControl(true);
  public disableCompany = new FormControl(true);
  @Output() public sendChooseCompany: EventEmitter<any> = new EventEmitter();
  @Output() public sendAllCompany: EventEmitter<any> = new EventEmitter();
  @Output() public stepOutput: EventEmitter<any> = new EventEmitter();
  public outputObj: StepZero = new StepZeroObj();
  public allCleaners: any;

  constructor(
      private router: Router,
      private auth: AuthService,
      private crud: CrudService
  ) { }
  ngOnInit() {
    // this.auth.getStep.subscribe(( v: number ) => {
    //     this.step = v;
    // });

  }
  countryChange(e) {
    this.disableCompany = new FormControl(false);
    this.step1Completed = true;
    this.outputObj.country = e.country;
    this.outputObj.city = e.city;
  }
  companyChange(e) {
    // this.auth.setStep(this.step += 1);
    this.sendChooseCompany.emit(e);
    // this.stepOutput.emit(1);

  }
  allCompany(e) {
    console.log(e)
    this.sendAllCompany.emit(e);
  }
  next() {
      this.stepOutput.emit(1);
  }
}
