import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialPipe'
})
export class ExponentialPipePipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 3);
  }

}
