import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-become-our-service',
  templateUrl: './become-our-service.component.html',
  styleUrls: ['./become-our-service.component.css']
})
export class BecomeOurServiceComponent implements OnInit {
  public showContent: boolean = true;
  constructor() {
  }

  ngOnInit() {
  }

  show() {
    this.showContent = !this.showContent;
  }

}
