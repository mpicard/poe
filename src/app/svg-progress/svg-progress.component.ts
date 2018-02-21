import 'rxjs/Observable';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-progress',
  templateUrl: './svg-progress.component.html',
  styleUrls: ['./svg-progress.component.styl']
})
export class SvgProgressComponent {
  @Input() progress: number;
  @Input() radius = 90;

  get dashoffset() {
    const circumference = Math.PI * this.radius * 2;

    let percent = this.progress;

    if (this.progress < 0) percent = 0;
    else if (this.progress > 100) percent = 100;

    return ((100 - percent) / 100) * circumference;
  }
}
