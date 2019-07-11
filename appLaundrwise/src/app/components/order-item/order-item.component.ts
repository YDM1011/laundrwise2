import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit, OnChanges {
  // public count: number = 0;
  @Input() obj;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteProd: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.obj['count'] = typeof this.obj['count'] === 'number' ? this.obj.count : 0;
    this.obj['totalPrice'] = typeof this.obj['totalPrice'] === 'number' ? this.obj.totalPrice : this.obj.price;
  }
  ngOnChanges() {
    // console.log(this.obj.currentOrder)
  }

  decrement() {
    typeof this.obj['count'] === 'number' ? this.obj.count-- : 0;
    if (this.obj.count <= 0) {
      this.obj.count = 0;
      this.onDelete.emit(this.obj);
    } else if (this.obj.count === 0) {
      this.obj.totalPrice = this.obj.price;
      this.onAdd.emit(this.obj);
    } else {
      this.obj.totalPrice = this.obj.price * this.obj.count;
      this.onAdd.emit(this.obj);
    }
  }
  increment() {
    typeof this.obj['count'] === 'number' ? this.obj.count++ : 0;
    this.obj.totalPrice = this.obj.price * this.obj.count;
    this.onAdd.emit(this.obj);
  }
  decrementProduct() {
    typeof this.obj['count'] === 'number' ? this.obj.count-- : 0;
    if (this.obj.count <= 0) {
      this.obj.count = 0;
      this.onDeleteProd.emit(this.obj);
    } else if (this.obj.count === 0) {
      this.obj.totalPrice = this.obj.price;
      this.onDeleteProd.emit(this.obj);
    } else {
      this.obj.totalPrice = this.obj.price * this.obj.count;
      this.onUpdate.emit(this.obj);
    }
  }
  incrementProduct() {
    typeof this.obj['count'] === 'number' ? this.obj.count++ : 0;
    this.obj.totalPrice = this.obj.price * this.obj.count;
    this.onUpdate.emit(this.obj);
  }
}
