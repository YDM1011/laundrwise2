import {AfterViewInit, ChangeDetectionStrategy, Component, Directive, ElementRef, OnInit} from '@angular/core';
import {CrudService} from "../../../../crud.service";
import {AuthService} from "../../../../auth.service";
import {WS} from "../../../../websocket/websocket.events";
import {WebsocketService} from "../../../../websocket";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
// @Directive({
//   selector: '[appScrollUpload]'
// })
export class AllComponent implements OnInit, AfterViewInit {
  public notification$: any;
  public updateNotificationList: any;
  public user;
  public cleaner: any;
  public allOrdersSuperManager: any = [];
  public loading: boolean = false;


  public elem: ElementRef;
  public scroll;
  public triger: boolean = true;
  constructor(
      private crud: CrudService,
      private auth: AuthService,
      private wsService: WebsocketService,
      private el: ElementRef
  ) {
    this.elem = el;
  }
  ngOnInit() {
    // this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
    //
    // this.notification$.subscribe(v => {
    //   console.log(v);
    // });

    this.notification$ = this.wsService.on(WS.ON.ON_CONFIRM_ORDER);
    this.notification$.subscribe(v => {
      console.log(v);
    });
    this.auth.onUpDate.subscribe(( v: any ) => {
      if (v) {
        this.user = v;
        if (this.user.role === 'superManagerCleaner') {
          const populate = JSON.stringify({path: 'managers'});
          const query = JSON.stringify({'superManager': this.user._id});
          this.crud.getNoCache(`cleaner?query=${query}&populate=${populate}`).then((cleaner: any) => {
            this.cleaner = cleaner[0];
            if (cleaner[0]) {
              const populate1 = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
              const query1 = JSON.stringify({'cleanerOwner': this.cleaner._id, status: {$ne: 0}});
              this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}&skip=0&limit=8&sort={"date": "-1"}`).then((basket: any) => {
                this.allOrdersSuperManager = basket;
                this.loading = true;
              });
            }
          });
        }
      }
    });
  }

  ngAfterViewInit() {
    const block = this.elem.nativeElement;

    block.onscroll = e => {
      if ((e.srcElement.scrollTop + (e.target.offsetHeight * 1.2) > e.target.scrollHeight) && this.triger) {
        this.triger = false;
        this.upload();
      }
    };
  }
  upload() {
    console.log('tima');
    // let s = this;
    // let token = this.scroll || s.scrollUpload;
    // s.mailing.getNewMessage(s.folder, token).then((v:any)=>{
    //   if(v){
    //     this.triger = true;
    //     this.scroll = v.nextPageToken
    //   }
    // })
    // s.mailing.onMessage
  }

}
