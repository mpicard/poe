import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.styl']
})
export class ProgressComponent {
  @Input() progress: number;
  @Input() duration: number = 25 * 60;

  private radius = 90;

  get circumference() {
    return this.radius * 2 * Math.PI;
  }

  get strokeDashoffset() {
    let percent = this.progress;

    if (this.progress < 0) percent = 0;
    else if (this.progress > 100) percent = 100;

    return ((100 - percent) / 100) * this.circumference;
  }

  get strokeDasharray() {
    return this.circumference;
  }
}
