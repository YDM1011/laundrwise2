import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../../crud.service";
import {WS} from "../../../websocket/websocket.events";
import {WebsocketService} from "../../../websocket";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit, OnChanges {

  public id:any;
  public notifications:any;
  public notification$:any;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private crud: CrudService,
      private wsService: WebsocketService
      ) { }

  ngOnInit() {
      this.route.params.subscribe((params: any) => {
          this.id = this.route.snapshot.paramMap.get('id');
          this.getNotificationList(this.id);
      });
      this.notification$ = this.wsService.on(WS.ON.ON_NOTIFICATION);
      this.notification$.subscribe(v => {
          if(JSON.parse(v).data.data === this.id)
          this.getNotificationList(JSON.parse(v).data.data)
      });
  }
  ngOnChanges() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getNotificationList(this.id);
  }
  getNotificationList(entity){
    let query = JSON.stringify({
        isNotRead: true,
        entity: entity
    });
    this.crud.getNoCache('adminNotification', '', `?query=${query}`).then((v:any)=>{
        this.notifications = v
    })
  }
}
