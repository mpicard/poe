import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  transform(value: number, total: number): string {
    const minutes = this.pad(this.minutes(value, total));
    const seconds = this.pad(this.seconds(value, total));

    return `${minutes}:${seconds}`;
  }

  private minutes(value, total) {
    return Math.floor((total - value) / 60);
  }

  private seconds(value, total) {
    return (total - value) - this.minutes(value, total) * 60;
  }

  private pad(value) {
    return ('0' + value).slice(-2);
  }
}
