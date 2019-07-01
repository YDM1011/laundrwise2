import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification-label',
  templateUrl: './notification-label.component.html',
  styleUrls: ['./notification-label.component.scss']
})
export class NotificationLabelComponent implements OnInit, OnChanges {

  @Input() count;
  @Input() name;
  @Input() entity;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.count)
  }

}
