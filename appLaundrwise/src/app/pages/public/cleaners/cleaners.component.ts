import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-cleaners',
  templateUrl: './cleaners.component.html',
  styleUrls: ['./cleaners.component.scss']
})
export class CleanersComponent implements OnInit {
  public allCleaners: any = [];
  constructor(
      private crud: CrudService
  ) {}

  ngOnInit() {
    this.crud.get('cleaner').then((v: any) => {
      this.allCleaners = v;
    });
  }
}
