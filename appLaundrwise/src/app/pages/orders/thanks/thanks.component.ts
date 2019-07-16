import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  public step: number;
  @Output() public stepOutput3: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  closeOrder() {
    this.stepOutput3.emit(1);
  }
}
