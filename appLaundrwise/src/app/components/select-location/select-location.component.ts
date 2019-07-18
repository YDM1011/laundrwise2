import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudService} from '../../crud.service';
import {ILocation} from '../../pages/admin/setting/add-country/location';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {
  public locations;
  public isShowCity: boolean = false;
  public isOpenC: boolean = false;
  public isOpen: boolean = false;
  public location: ILocation = {country: 'Country', city: []};
  public locData: any = {country: 'Country', city: ''};
  @Output() data = new EventEmitter();
  @Input() defLocation;
  @Input() signup;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
    this.crud.getNoCache('location').then((v: any) => {
      this.locations = v;
    });
  }

  validate(e) {
    if (e) {
      if (e !== 'Country') return true;
    }
    return false;
  }

  countryChange(data) {
    this.isOpenC = false;
    if (this.validate(data)) {
        this.isShowCity = true;
    } else {
      this.isShowCity = false;
    }
    this.locData['country'] = data.country;
    this.location = Object.assign({}, data);
  }

  cityChange(e) {
      this.isOpen = false;
      this.locData['city'] = e;
      this.data.emit(this.locData);
  }
}
