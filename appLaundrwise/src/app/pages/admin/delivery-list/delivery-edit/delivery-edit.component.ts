import { Component, OnInit } from '@angular/core';
import {Cleaner, CleanerObj} from "../../cleaners-list/cleaner";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../../crud.service";
import {Delivery, DeliveryObj} from "../delivery";

@Component({
  selector: 'app-delivery-edit',
  templateUrl: './delivery-edit.component.html',
  styleUrls: ['./delivery-edit.component.scss']
})
export class DeliveryEditComponent implements OnInit {
    public id;
    public delivery: Delivery = new DeliveryObj();
    public initDataPost: Delivery = new DeliveryObj();
    public isBlok: boolean = false;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');

        this.crud.getNoCache('delivery', this.id).then((v: any) => {
            this.initDataPost = v;
            this.delivery = Object.assign({}, v);
        });
    }

    ngOnChanges() {}

    validate() {
        let isTrue = false;
        for (const key in this.delivery) {
            if (typeof this.initDataPost[key] !== 'object')
                if (this.initDataPost[key] !== this.delivery[key]) isTrue = true;
        }
        if (isTrue) return isTrue;
        return isTrue;
    }

    btnBlok(is) {
        this.isBlok = is;
    }

    formCheck() {
        this.btnBlok(this.validate());
    }

    userSubmit() {
        this.crud.post('delivery', this.delivery, this.id, ['delivery'] ).then( ( v: any ) => {
            this.initDataPost = v;
            this.delivery = Object.assign({}, v);
            this.router.navigate(['/admin/delivery']);
        }).catch(e => {
        });
    }
}
