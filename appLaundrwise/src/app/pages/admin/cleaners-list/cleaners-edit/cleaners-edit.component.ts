import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudService} from '../../../../crud.service';
import {Cleaner, CleanerObj} from '../cleaner';

@Component({
  selector: 'app-cleaners-edit',
  templateUrl: './cleaners-edit.component.html',
  styleUrls: ['./cleaners-edit.component.scss']
})
export class CleanersEditComponent implements OnInit, OnChanges {
    public id;
    public cleaner: Cleaner = new CleanerObj();
    public initDataPost: Cleaner = new CleanerObj();
    public isBlok: boolean = false;
    public cityandcountry: any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');

        this.crud.getNoCache('cleaner', this.id).then((v: any) => {
            this.initDataPost = v;
            this.cleaner = Object.assign({}, v);
        });
    }

    ngOnChanges() {}

    validate() {
        let isTrue = false;
        for (const key in this.cleaner) {
            if (typeof this.initDataPost[key] !== 'object')
            if (this.initDataPost[key] !== this.cleaner[key]) isTrue = true;
        }
        if (isTrue) return isTrue;
        /** check checked category */
        for (let i = 0; i < this.initDataPost.category.length; i++) {
            if ((this.initDataPost.category.indexOf(this.cleaner.category[i]) === -1) ||
                (this.initDataPost.category.length !== this.cleaner.category.length)) {
                return isTrue = true;
                break;
            }
        }
        return isTrue;
    }

    pullCategory(elems) {
        this.cleaner.category = this.crud.arrObjToArrId(elems);
        this.formCheck();
        console.log(this.crud.arrObjToArrId(elems));
    }

    btnBlok(is) {
        this.isBlok = is;
    }

    formCheck() {
        this.btnBlok(this.validate());
    }
    countryChange(e) {
        if (e) {
            this.cityandcountry = e;
        }
    }
    userSubmit() {
        this.crud.post('cleaner', this.cleaner, this.id, ['cleaner'] ).then( ( v: any ) => {
            this.initDataPost = v;
            this.cleaner = Object.assign({}, v);
            this.router.navigate(['/admin/cleaners']);
        }).catch(e => {
        });
    }
}
