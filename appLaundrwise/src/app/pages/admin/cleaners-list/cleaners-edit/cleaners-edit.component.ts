import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CrudService} from '../../../../crud.service';
import {Cleaner, CleanerObj} from '../cleaner';
import Swal from "sweetalert2";

@Component({
  selector: 'app-cleaners-edit',
  templateUrl: './cleaners-edit.component.html',
  styleUrls: ['./cleaners-edit.component.scss']
})
export class CleanersEditComponent implements OnInit, OnDestroy {
    public id;
    public cleaner: Cleaner = new CleanerObj();
    public initDataPost: Cleaner = new CleanerObj();
    public isBlok: boolean = false;
    public loaded: boolean = false;
    public cityandcountry: any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private crud: CrudService
    ) { }

    // ngAfterViewInit(){
    //     if (this.cleaner.images) {
    //         this.remImg = true;
    //     } else {
    //         this.remImg = false;
    //     }
    // }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');

        console.log(this.cleaner);
        this.crud.getNoCache('cleaner', this.id).then((v: any) => {
            this.initDataPost = v;
            // if (v.images) {
            //     this.remImg = true;
            // } else {
            //     this.remImg = false;
            // }
            this.cleaner = Object.assign({}, v);
            console.log(this.cleaner)
            this.loaded = true;
        });
    }

    // ngOnChanges() {}

    validate() {
        let isTrue = false;
        for (const key in this.cleaner) {
            if (typeof this.initDataPost[key] !== 'object')
            if (this.initDataPost[key] !== this.cleaner[key]) isTrue = true;
        }
        if (isTrue) return isTrue;
        for (const key in this.initDataPost) {
            if (typeof this.cleaner[key] !== 'object')
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

    fsData(data) {
        if (!data.file) return this.cleaner.images = null;
        this.cleaner['images'] = data.file;
        data.file = null;
        // this.initDataProduct.images = data.file;
        // this.btnBlok(this.validate());
        this.formCheck();
        console.log(this.cleaner)
    }
    removeImg() {

        Swal.fire({
            title: 'Do you confirm the deletion?',
            type: 'warning',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: true,
            reverseButtons: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel!',
            confirmButtonColor: '#dd4535',
        }).then((result) => {
            if (result.value) {
                this.cleaner.images = null;
                this.formCheck()
            }
        });
    }

    ngOnDestroy() {
        this.cleaner = new CleanerObj();
        this.cleaner.images = null;
        this.initDataPost = new CleanerObj();
        this.isBlok = false;
        this.loaded = false;
        console.log('destroy', this.cleaner);
    }
}
