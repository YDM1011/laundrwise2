import {Component, OnChanges, OnInit} from '@angular/core';
import {CrudService} from "../../../crud.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-faqAdmin',
  templateUrl: './faqAdmin.component.html',
  styleUrls: ['./faqAdmin.component.scss']
})
export class FaqAdminComponent implements OnInit, OnChanges {
    public showSave: boolean = false;
    public faq = {question: '', answer: ''};
    public faqs = [];
    constructor(
        private crud: CrudService
    ) { }

    ngOnInit() {
        this.crud.getNoCache('faq').then((v: any) => {
            if (v) {
                this.faqs = v;
            }
        });
    }

    ngOnChanges() {

    }

    save(e) {
        e.preventDefault();
        if (!this.faq.answer || !this.faq.question) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All field required'
            });
        } else {
            this.crud.post('faq', this.faq).then((v: any) => {
                this.faqs.unshift(v);
            });
            this.faq = {question: '', answer: ''};
        }
    }
    delete(f, i) {
        this.crud.delete('faq', f._id).then((v: any) => {
            this.faqs.splice(i, 1);
        });

    }
}
