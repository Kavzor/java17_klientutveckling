import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, from: string, to: string): string {
    if(value == 0 || isNaN(Number(value))) {
      return 'No delay';
    }
    else {
      if(to.toLowerCase() === 'hour') {
        return this.toHour(value, from);
      }
    }
  }

  toHour(value: string, from: string): string {
    //gör så att denna metod retunerar tiden i timmar, ex. 343 minuter blir "6 hours"
    let hourformat;
    switch(from.toLowerCase()) {
      case 'minute': 
        hourformat = (Number(value) / 60).toFixed(0);
        hourformat = hourformat > 1 ? hourformat + " hours" : hourformat + " hour";
        return hourformat;
    }
  }
}
