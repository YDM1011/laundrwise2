import {Component, OnInit} from '@angular/core';
import {CrudService} from "../../../crud.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public faqs;
  constructor(
      private crud: CrudService
  ) {
  }

  ngOnInit() {
      this.crud.getNoCache('faq').then((v: any) => {
          if (v) {
              this.faqs = v;
          }
      });
  }


}
