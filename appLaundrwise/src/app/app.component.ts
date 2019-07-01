import {Component, OnInit} from '@angular/core';
import {WS} from "./websocket/websocket.events";
import {CrudService} from "./crud.service";
import {MatDialog} from "@angular/material";
import {WebsocketService} from "./websocket";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'laundrwise';
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
}
