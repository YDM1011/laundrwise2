import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth.service";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-init-order',
  templateUrl: './init-order.component.html',
  styleUrls: ['./init-order.component.scss']
})
export class InitOrderComponent implements OnInit {


    constructor(
        private auth: AuthService,
        private crud: CrudService
    ) {

    }

  ngOnInit() {
  }

}
