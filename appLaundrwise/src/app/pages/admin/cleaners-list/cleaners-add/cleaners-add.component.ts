import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../../crud.service";
import {Cleaner, CleanerObj} from "../cleaner";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cleaners-add',
  templateUrl: './cleaners-add.component.html',
  styleUrls: ['./cleaners-add.component.scss']
})
export class CleanersAddComponent implements OnInit {
    public cityandcountry: any;
    public cleaner: Cleaner = new CleanerObj();
    public remImg: boolean = false;
    public errorMessage: boolean = false;
    constructor(
        private router: Router,
        private crud: CrudService
    ) { }

    ngOnInit() {
    }

    addPost() {
        if (this.cityandcountry && (this.cityandcountry.city || this.cityandcountry.country)) {
            this.cleaner.city = this.cityandcountry.city;
            this.cleaner.country = this.cityandcountry.country;
        }
        if (!this.cleaner.address || !this.cleaner.name || !this.cleaner.city || !this.cleaner.country || !this.cleaner.images) {
            this.errorMessage = true;
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All field required'
            });
        } else {
            this.errorMessage = false;
            delete this.cleaner.date;
            delete this.cleaner.superManager;
            this.cleaner.money = 0;
            this.cleaner.city = this.cityandcountry.city;
            this.cleaner.country = this.cityandcountry.country;
            this.crud.post('cleaner', this.cleaner, null, ['cleaner'], true).then(v => {
                this.router.navigate(['/admin/cleaners']);
                console.log(v)

            });
        }
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

    fsData(data) {
        this.cleaner.images = data.file;
    }
}
