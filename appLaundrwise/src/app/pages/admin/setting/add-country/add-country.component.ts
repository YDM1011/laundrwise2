import {Component, OnChanges, OnInit} from '@angular/core';
import {ILocation} from "./location";
import {CrudService} from "../../../../crud.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit, OnChanges {
  public locations;
  public addCountryIf: boolean = false;
  public location: ILocation = {country: '', city: []};
  public isAdd:boolean = false;
  public city:string = '';

  constructor(
      private crud: CrudService,
  ) { }

  ngOnInit() {
    this.crud.getNoCache('location').then((v: any) => {
      this.locations = v;
    });
  }
  ngOnChanges() {}
  addCountry() {
    this.addCountryIf = !this.addCountryIf;
  }

  addCity() {
    this.isAdd = false;
    this.location.city ? this.location.city : this.location.city = [];
    this.location.city.push(this.city);
    this.city = '';
  }
  save() {
    this.crud.post('location', this.location).then(v => {
      this.locations.push(v);
      this.addCountryIf = !this.addCountryIf;
    }).catch(e => {
      if (e) {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Country already added '
        });
      }
    });
    this.location = {country: '', city: []};
  }
  changeRemove(e) {
    this.locations.splice(e, 1);
  }
}
