import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../auth.service';
import {Router} from "@angular/router";
import {CrudService} from "../../../crud.service";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {MatDatepickerInputEvent} from "@angular/material";

@Component({
  selector: 'app-new-orders-step-two',
  templateUrl: './new-orders-step-two.component.html',
  styleUrls: ['./new-orders-step-two.component.css']
})
export class NewOrdersStepTwoComponent implements OnInit, OnChanges {
  public me;
  public basketArray = [];
  public instruction: string;
  minDate = new Date();
  constructor(
      private router: Router,
      private auth: AuthService,
      private crud: CrudService,
      private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.auth.onUpDate.subscribe((v: any) => {
      if (v) {
        this.me = v;
      }
    });
    this.getBasket();
  }
  ngOnChanges() {}
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  getBasket() {
    const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name'}, {path: 'products'}]);
    const query = JSON.stringify({'createdBy.userId': this.me._id});
    this.crud.getNoCache(`basket?query=${query}&populate=${populate}`).then((v: any) => {
      this.basketArray = v;
    });
  }
  removeProd(prod, cleaner) {
    console.log(prod);
    this.crud.deleteOrder(`product`, prod._id).then((v: any) => {
      const indexCleaner = this.crud.find('_id', cleaner, this.basketArray);
      const index = this.crud.find('_id', prod, this.basketArray[indexCleaner].products);
      this.basketArray[indexCleaner].product.splice(index, 1);
    });
  }
}
