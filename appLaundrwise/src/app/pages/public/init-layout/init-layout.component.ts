import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-init-layout',
  templateUrl: './init-layout.component.html',
  styleUrls: ['./init-layout.component.scss']
})
export class InitLayoutComponent implements OnInit {


  constructor(
      private router: Router
  ) {

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
