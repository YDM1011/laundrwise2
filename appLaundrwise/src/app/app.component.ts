import {Component, OnInit} from '@angular/core';
import {WS} from "./websocket/websocket.events";
import {CrudService} from "./crud.service";
import {MatDialog} from "@angular/material";
import {WebsocketService} from "./websocket";
import {AuthService} from "./auth.service";

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
    private auth: AuthService,
    public dialog: MatDialog,
    private wsService: WebsocketService
  ) {}

  ngOnInit() {
      this.notification$ = this.wsService.on(WS.ON.ON_NOTIFICATION);
      this.notification$.subscribe(v => {
          console.log(v);
      });
      this.crud.getNoCache('setting').then((v: any) => {
          if (v) {
              this.auth.setSettings(v);
          }
      });
  }
}
