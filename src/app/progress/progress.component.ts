import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.styl']
})
export class ProgressComponent implements OnInit {

  private progress = 0;

  ngOnInit() {
    Observable.timer(0, 1000).subscribe(() => {
      this.progress += 1;
    });
  }

}
