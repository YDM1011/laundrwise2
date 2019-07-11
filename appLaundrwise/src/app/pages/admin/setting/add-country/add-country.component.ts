import { Component, OnInit } from '@angular/core';
import {ILocation} from "./location";
import {CrudService} from "../../../../crud.service";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
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
  addCountry() {
    this.addCountryIf = !this.addCountryIf;
  }

  addCity() {
    console.log(this.location);
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
      console.log(e);
    });
      this.location = {country: '', city: []};
  }
}
