import { Component, OnInit } from '@angular/core';
import {Cleaner, CleanerObj} from "../../cleaners-list/cleaner";
import {Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";

@Component({
  selector: 'app-delivery-add',
  templateUrl: './delivery-add.component.html',
  styleUrls: ['./delivery-add.component.scss']
})
export class DeliveryAddComponent implements OnInit {
    public delivery: Cleaner = new CleanerObj();

    constructor(
        private router: Router,
        private crud: CrudService
    ) { }

    ngOnInit() {
    }

    addPost() {
        delete this.delivery.date;
        delete this.delivery.superManager;
        this.crud.post('delivery', this.delivery, null, ['delivery']).then(v => {
            this.router.navigate(['/admin/delivery']);
        });
    }

    pullCategory(elems) {
        this.delivery.category = this.crud.arrObjToArrId(elems);
        console.log(this.crud.arrObjToArrId(elems));
    }
}
