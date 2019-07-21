import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-cleaners-detail',
  templateUrl: './cleaners-detail.component.html',
  styleUrls: ['./cleaners-detail.component.scss']
})
export class CleanersDetailComponent implements OnInit {
  public id;
  public allCleaners;
  public cleaner: any;
  constructor(
      private route: ActivatedRoute,
      private crud: CrudService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = this.route.snapshot.paramMap.get('id');
      this.crud.getNoCache(`cleaner/${this.id}`).then((v: any) => {
        this.cleaner = Object.assign({}, v);
      });
    });
  }

}
