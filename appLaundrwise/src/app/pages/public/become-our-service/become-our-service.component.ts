import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-become-our-service',
  templateUrl: './become-our-service.component.html',
  styleUrls: ['./become-our-service.component.css']
})
export class BecomeOurServiceComponent implements OnInit {
  activeTab;
  constructor() {
  }

  ngOnInit() {
    this.activeTab = 'delivery';
  }


}
