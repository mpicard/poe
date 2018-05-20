import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.styl']
})
export class ProgressComponent {
  @Input() progress: number;
  @Input() duration: number;

  private radius = 90;

  get circumference() {
    return this.radius * 2 * Math.PI;
  }

  get strokeDashoffset() {
    let percent = (this.duration - this.progress) / this.duration;

    if (percent < 0) percent = 0;
    else if (percent > 1) percent = 1;

    return percent * this.circumference;
  }

  get strokeDasharray() {
    return this.circumference;
  }
}
