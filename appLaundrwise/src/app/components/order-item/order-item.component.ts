import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  public count: number = 0;
  @Input() obj;
  @Output() public myOutput: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  decrement() {
    if (this.count === 0) {
      return this.count = 0;
    }
    this.count--;
    this.obj.count = this.count;
    console.log(this.obj);
  }
  increment() {
    this.count++;
    this.obj.count = this.count;
    this.sendOutEvent(this.obj);
  }
  sendOutEvent(value) {
    this.myOutput.emit(value);
  }
}
