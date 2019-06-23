import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CrudService} from "../../crud.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
      private router: Router,
      private crud: CrudService,
  ) { }

  ngOnInit() {
  }
  logout() {

    this.crud.post('adminLogout', {}).then((v: any) => {
        this.router.navigate(['/']);
        }).catch(error => {});
  }
}
