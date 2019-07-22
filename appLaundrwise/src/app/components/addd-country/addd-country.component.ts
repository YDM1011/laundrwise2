import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudService} from "../../crud.service";

@Component({
  selector: 'app-addd-country',
  templateUrl: './addd-country.component.html',
  styleUrls: ['./addd-country.component.scss']
})
export class AdddCountryComponent implements OnInit {
  @Input() obj;
  @Input() array;
  @Input() index;
  @Output() removeCurrent = new EventEmitter()
  public newCity = '';
  public edit: boolean = false;
  public addCity: boolean = false;
  public saveBoolean: boolean = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
  }
  editChange() {
    this.edit = !this.edit;
    this.addCityF();
  }
  remove(index) {
    this.obj.city.splice(index, 1);
    this.saveBoolean = true;
  }
  deleteAll() {
    this.crud.delete(`location`, this.obj._id, null, false).then((v: any) => {
      this.removeCurrent.emit(this.index);
    });
  }
  addCityB() {
    this.obj.city.push(this.newCity);
    this.newCity = '';
    this.saveBoolean = true;
  }
  addCityF() {
    this.addCity = !this.addCity;
  }
  save() {
    this.crud.post(`location`, this.obj, this.obj._id).then((v: any) => {
      this.saveBoolean = false;
      this.editChange();
    });
  }
}
