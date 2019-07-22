import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {CrudService} from "../crud.service";

@Directive({
  selector: '[appScrollUpload]'
})
export class ScrollUploadDirective implements AfterViewInit {

  @Input('appScrollUpload') scrollUpload;
  @Input() folder;
  @Input() id;
  @Input() role;
  @Output() output = new EventEmitter();
  public skip = 1;
  public elem: ElementRef;
  public scroll;
  public count = 0;
  public triger: boolean = true;
  constructor(
      private el: ElementRef,
      private crud: CrudService
  ) {
    this.elem = el;
  }

  ngAfterViewInit() {
    if (this.role === 'client') {
      const block = this.elem.nativeElement;
      const query1 = JSON.stringify({'createdBy.itemId': this.id});
      this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
        this.count = v.count;
        block.onscroll = e => {
          if ((e.srcElement.scrollTop + (e.target.offsetHeight * 1.2) > e.target.scrollHeight) && this.triger) {
            this.triger = false;
            this.upload();
          }
        };
      });
    }
    if (this.role === 'managerCleaner') {
      const block = this.elem.nativeElement;
      this.crud.getNoCache(`actionLog/${this.id}`).then((v: any) => {
        this.count = v.ordersCount;
        block.onscroll = e => {
          if ((e.srcElement.scrollTop + (e.target.offsetHeight * 1.2) > e.target.scrollHeight) && this.triger) {
            this.triger = false;
            this.upload();
          }
        };
      });
    }
    if (this.role === 'superManagerCleaner') {
      const block = this.elem.nativeElement;
      const query1 = JSON.stringify({'cleanerOwner': this.id, status: {$ne: 0}});
      this.crud.getNoCache(`basket/count?query=${query1}`).then((v: any) => {
        this.count = v.count;
        block.onscroll = e => {
          if ((e.srcElement.scrollTop + (e.target.offsetHeight * 1.2) > e.target.scrollHeight) && this.triger) {
            this.triger = false;
            this.upload();
          }
        };
      });
    }
  }
  upload() {
    if (this.count <= this.skip * 8) return;
    if (this.role === 'client') {
      const populate = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
      const query = JSON.stringify({'createdBy.itemId': this.id, cleanerOwner: { $exists: true }, status: {$ne: 0}});
      this.crud.getNoCache(`basket?query=${query}&populate=${populate}&skip=${this.skip * 8}&limit=8&sort={"date": "-1"}`).then((basket: any) => {
        this.skip++;
        this.triger = true;
        this.output.emit(basket);
      });
    }
    if (this.role === 'managerCleaner') {
      const populate = JSON.stringify({path: 'orders', populate: {path: 'products'}});
      this.crud.getNoCache(`actionLog/${this.id}?query={}&populate=${populate}&skip=${this.skip * 8}&limit=8&sort={"date": "-1"}`).then((basket: any) => {
        this.skip++;
        this.triger = true;
        this.output.emit(basket);
      });
    }
    if (this.role === 'superManagerCleaner') {
    const populate1 = JSON.stringify([{path: 'cleanerOwner', select: 'name superManager'}, {path: 'products'}]);
    const query1 = JSON.stringify({'cleanerOwner': this.id, status: {$ne: 0}});
    this.crud.getNoCache(`basket?query=${query1}&populate=${populate1}&skip=${this.skip * 8}&limit=8`).then((basket: any) => {
      if (basket && basket.length > 0) {
        this.skip++;
        this.triger = true;
        this.output.emit(basket);
      }
    });
    }
  }
}
