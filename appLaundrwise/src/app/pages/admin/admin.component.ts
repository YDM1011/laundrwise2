import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '../../websocket';
import {WS} from '../../websocket/websocket.events';
import {CrudService} from "../../crud.service";
import {MatDialog} from "@angular/material";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public notification$;
  constructor(
      private crud: CrudService,
      public dialog: MatDialog,
      private wsService: WebsocketService
  ) {}

  ngOnInit() {
    this.notification$ = this.wsService.on(WS.ON.ON_NOTIFICATION);

    this.notification$.subscribe(v => {
      console.log(v);
    });
  }
  send() {
    console.log('send');
    this.wsService.send(WS.SEND.NOTIFICATION, { data: 'test sf' });
  }
}
