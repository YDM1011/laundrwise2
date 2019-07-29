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
  @Input() indexMain;
  @Output() removeCurrent: EventEmitter<any> = new EventEmitter();
  public newCity = '';
  public edit: boolean = false;
  public addCity: boolean = false;
  public saveBoolean: boolean = false;
  panelOpenState: boolean = false;
  constructor(
      private crud: CrudService
  ) { }

  ngOnInit() {
  }
  // editChange() {
  //   this.edit = !this.edit;
  //   this.addCityF();
  // }
  remove(index) {
    this.obj.city.splice(index, 1);
    this.crud.post(`location`, this.obj, this.obj._id, false, false).then((v: any) => {
      this.saveBoolean = false;
    });
  }
  deleteAll() {
    this.crud.delete(`location`, this.obj._id, null, false).then((v: any) => {
      if (v) {
        this.removeCurrent.emit(this.indexMain);
      }
    });
  }
  addCityB() {
    this.obj.city.push(this.newCity);
    this.newCity = '';
    this.saveBoolean = true;
    this.crud.post(`location`, this.obj, this.obj._id, false, false).then((v: any) => {
      this.saveBoolean = false;
    });
  }
  addCityF() {
    this.addCity = !this.addCity;
    if (!this.panelOpenState) {
      this.panelOpenState = true;

    }
  }
  // save() {
  //   this.crud.post(`location`, this.obj, this.obj._id).then((v: any) => {
  //     this.saveBoolean = false;
  //     this.editChange();
  //   });
  // }
}
