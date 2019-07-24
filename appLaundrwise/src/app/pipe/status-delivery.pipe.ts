import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusDelivery'
})
export class StatusDeliveryPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let res = 'Status';
    // let res = un know value ${value};
    value = parseInt(value);
    switch (value) {
      case 2: res = '<div class="status__lamp active"></div><div class="status__title">Active</div>';
        break;
      case 3: res = '<div class="status__lamp inprogress"></div><div class="status__title">In Clener</div>';
        break;
      case 4: res = '<div class="status__lamp inprogress"></div><div class="status__title">Сollect and give away</div>';
        break;
      case 5: res = '<div class="status__lamp done"></div><div class="status__title">Done</div>';
        break;
      case 6: res = '<div class="status__lamp closed"></div><div class="status__title">Closed</div>';
        break;
      default: break;
    }
    return res;
  }

}
