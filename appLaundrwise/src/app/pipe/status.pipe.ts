import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = "Status";
    // let res = un know value ${value};
    value = parseInt(value);
    switch (value) {
      case 1: res = '<div class="status__lamp waiting"></div><div class="status__title">Waiting</div>';
          break;
      case 2: res = '<span class="label label-primary-light">Підтверджене</span>';
          break;
      case 3: res = '<span class="label label-warning">Очікується оплата</span>';
          break;
      case 4: res = '<span class="label label-success">Оплачене</span>';
          break;
      case 5: res = '<span class="label label-info">Змінене оператором</span>';
          break;
      case 6: res = '<span class="label label-default">Виконано</span>';
          break;
      case 7: res = '<span class="label label-danger">Відмінене</span>';
          break;
      default: break;
    }
    return res;
  }

}
