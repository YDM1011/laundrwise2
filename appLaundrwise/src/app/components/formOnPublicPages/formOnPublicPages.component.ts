import {Component, OnInit} from '@angular/core';
import {ContactUsModel} from '../../models';
import {ApiService} from "../../services";

@Component({
    selector: 'app-form-on-public-pages',
    templateUrl: './formOnPublicPages.component.html',
    styleUrls: ['./formOnPublicPages.component.css']
})
export class FormOnPublicPagesComponent implements OnInit {
    formObject: ContactUsModel = new ContactUsModel ();
    constructor(private  apiService: ApiService) {
    }

    ngOnInit() {
    }

    sendForm(formObject) {
        this.apiService.post('contactUs', formObject).then((data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            });
    }


}
