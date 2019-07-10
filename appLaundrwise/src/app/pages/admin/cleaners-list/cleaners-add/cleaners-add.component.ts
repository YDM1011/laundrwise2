import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../../crud.service";
import {Cleaner, CleanerObj} from "../cleaner";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cleaners-add',
  templateUrl: './cleaners-add.component.html',
  styleUrls: ['./cleaners-add.component.scss']
})
export class CleanersAddComponent implements OnInit {
    public cityandcountry: any;
    public cleaner: Cleaner = new CleanerObj();

    constructor(
        private router: Router,
        private crud: CrudService
    ) { }

    ngOnInit() {
    }

    addPost() {
        delete this.cleaner.date;
        delete this.cleaner.superManager;
        this.cleaner.city = this.cityandcountry.city;
        this.cleaner.country = this.cityandcountry.country;
        this.crud.post('cleaner', this.cleaner, null, ['cleaner']).then(v => {
            this.router.navigate(['/admin/cleaners']);
        });
    }

    countryChange(e) {
        if (e) {
            this.cityandcountry = e;
        }
    }

    pullCategory(elems) {
        this.cleaner.category = this.crud.arrObjToArrId(elems);
        console.log(this.crud.arrObjToArrId(elems));
    }
}
