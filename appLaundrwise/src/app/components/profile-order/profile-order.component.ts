import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-order',
  templateUrl: './profile-order.component.html',
  styleUrls: ['./profile-order.component.scss']
})
export class ProfileOrderComponent implements OnInit {
  @Input() obj;
  @Input() role;
  constructor() { }

  ngOnInit() {
    console.log(this.role);
  }

}
