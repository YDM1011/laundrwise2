import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  public count: number = 0;
  @Input() price;
  constructor() { }

  ngOnInit() {
  }

  decrement() {
    if (this.count === 0) {
      return this.count = 0;
    }
    this.count--;
  }
  increment() {
    this.count++;
  }
}
