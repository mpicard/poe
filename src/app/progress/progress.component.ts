import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.styl']
})
export class ProgressComponent implements OnInit, OnDestroy {

  private progress = 0;

  sub: Subscription;

  ngOnInit() {
    this.sub = Observable.timer(0, 1000)
      .filter(() => this.progress < 100)
      .subscribe(() => {
        this.progress += 1;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
