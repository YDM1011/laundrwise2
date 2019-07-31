import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CrudService} from "../../crud.service";
import {WS} from "../../websocket/websocket.events";
import {WebsocketService} from "../../websocket";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit, OnChanges {
  public notification$;
  public notificationsNames: string[] = ['faq', 'cleaners', 'delivery', 'client'];
  public notifications: any = {
      faq: {count: 0, name: 'FAQ'},
      client: {count: 0, name: 'Client'},
      delivery: {count: 0, name: 'Delivery'},
      cleaners: {count: 0, name: 'Cleaners'},
  };
  constructor(
      private router: Router,
      private routeActive: ActivatedRoute,
      private crud: CrudService,
      private wsService: WebsocketService
  ) { }

  ngOnInit() {
      this.notification$ = this.wsService.on(WS.ON.ON_NOTIFICATION);

      this.notification$.subscribe(v => {
          this.updateNotificationList(JSON.parse(v).data.data);
          this.playAudio();
      });

      this.notificationsNames.forEach(entity => {
          this.updateNotificationList(entity);
      });
  }
  ngOnChanges() {}

  logout() {
    this.crud.post('adminLogout', {}, null, false, false).then((v: any) => {
        this.router.navigate(['/']);
        }).catch(error => {});
  }

    updateNotificationList(entity) {
      const query = JSON.stringify({
          isNotRead: true,
          entity: entity
      });
      this.crud.getNoCache('adminNotification', 'count', `?query=${query}`).then((v: any) => {
          this.notifications[entity].count = v.count;
      });
    }
    playAudio() {
        const audio = new Audio();
        audio.src = '../../../assets/audio/alert.mp3';
        audio.load();
        audio.play();
    }
}
