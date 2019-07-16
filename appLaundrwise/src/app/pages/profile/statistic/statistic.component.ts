import {Component, OnChanges, OnInit} from '@angular/core';
import {CrudService} from "../../../crud.service";
import {AuthService} from "../../../auth.service";
import {query} from "@angular/animations";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit, OnChanges {
  public me:any;
  public cleaner:any;
  public autoAssign: boolean = false;
  constructor(
      private crud: CrudService,
      private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.onUpDate.subscribe(v=>{
      this.me = v;
      let query = JSON.stringify({
          superManager: this.me._id
      });
      this.crud.getNoCache('cleaner', '', `?query=${query}`).then(v=>{
        this.cleaner = Object.assign({}, v[0]);
        this.autoAssign = this.cleaner.autoAssign;
      })
    })
  }

  ngOnChanges(){
    if (this.cleaner)
      this.autoAssign = this.cleaner.autoAssign;
  }

  update(){
    console.log(this.autoAssign)
      this.crud.post('cleaner', {autoAssign:this.autoAssign}, this.cleaner._id).then(v=>{
          this.cleaner = Object.assign({}, v);
      })
  }

}
