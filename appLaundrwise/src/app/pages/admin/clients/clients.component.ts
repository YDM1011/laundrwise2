import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    public subscriber = [];
    public loaded:boolean = false;
    constructor(
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.crud.getNoCache('client').then((v: any) => {
            this.subscriber = v;
            this.loaded = true;
        });
    }

}
