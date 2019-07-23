import { Component, OnInit } from '@angular/core';
import {Cleaner, CleanerObj} from "../../cleaners-list/cleaner";
import {Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-delivery-add',
  templateUrl: './delivery-add.component.html',
  styleUrls: ['./delivery-add.component.scss']
})
export class DeliveryAddComponent implements OnInit {
    public delivery: Cleaner = new CleanerObj();
    public cityandcountry: any;
    public errorMessage: boolean = false;
    constructor(
        private router: Router,
        private crud: CrudService
    ) { }

    ngOnInit() {
    }

    addPost() {


        if (this.cityandcountry && (this.cityandcountry.city || this.cityandcountry.country)) {
            this.delivery.city = this.cityandcountry.city;
            this.delivery.country = this.cityandcountry.country;
        }
        if (!this.delivery.address || !this.delivery.name || !this.delivery.city || !this.delivery.country) {
            this.errorMessage = true;
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All field required'
            });
        } else {
            this.errorMessage = false;
            delete this.delivery.date;
            delete this.delivery.superManager;
            this.delivery.city = this.cityandcountry.city;
            this.delivery.country = this.cityandcountry.country;
            this.crud.post('delivery', this.delivery, null, ['delivery']).then(v => {
                this.router.navigate(['/admin/delivery']);
            });
        }
    }
    countryChange(e) {
        if (e) {
            this.cityandcountry = e;
        }
    }

    // pullCategory(elems) {
    //     this.delivery.category = this.crud.arrObjToArrId(elems);
    //     console.log(this.crud.arrObjToArrId(elems));
    // }
}
