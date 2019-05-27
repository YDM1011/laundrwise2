import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
    public toggle: any[];

    constructor() {}

    ngOnInit() {
        this.toggle = [false , false , false];
    }

    showInfo(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const ansver = target.nextElementSibling;
        if (ansver.style.maxHeight) {
            ansver.style.maxHeight = null;
        } else {
            ansver.style.maxHeight = ansver.scrollHeight + 'px';
        }
    }
}
