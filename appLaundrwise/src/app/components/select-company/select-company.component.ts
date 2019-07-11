import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {CrudService} from "../../crud.service";

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss']
})
export class SelectCompanyComponent implements OnInit, OnChanges {
  @Output() curentCompanyEmit = new EventEmitter();
  @Output() allCompany = new EventEmitter();
  @Input() cityandcountry;
  @Input() allCleaner;
  @Input() curentCompany;
  public company: any = [];
  public isOpenC: boolean = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
      if (this.allCleaner) {
          this.company = this.allCleaner;
      }
  }
  ngOnChanges() {
      console.log(this.allCleaner);
    if (this.allCleaner) {
      this.company = this.allCleaner;
    } else {
      const populate = JSON.stringify({path: 'category', skip: 0, limit: 0});
      const query = JSON.stringify({city: this.cityandcountry.city, country: this.cityandcountry.country});
      this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((v: any) => {
        this.company = v;

      });
    }
  }
  companyChange(e) {
    this.curentCompany = e;
      console.log(this.curentCompany);
    this.curentCompanyEmit.emit(this.curentCompany);
    this.allCompany.emit(this.company);
    this.isOpenC = !this.isOpenC;
  }

}
