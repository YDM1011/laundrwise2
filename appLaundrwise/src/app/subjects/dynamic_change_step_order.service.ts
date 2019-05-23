import {Injectable, OnInit} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable()
export class DynamicChangeStepOrderService implements OnInit {
    public headers: HttpHeaders = new HttpHeaders();
    public objectForChangedStep = new Subject();
    constructor() {
    }

    public ngOnInit() {

    }

    changeStep(objectOrder) {
        this.objectForChangedStep.next(objectOrder);
    }
}
