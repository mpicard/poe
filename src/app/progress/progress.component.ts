import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.styl']
})
export class ProgressComponent {
  @Input() progress: number;
  @Input() display: string;
}
