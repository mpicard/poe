import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.styl']
})
export class TimerComponent implements OnInit, OnDestroy {

  @ViewChild('start') start: ElementRef;
  @ViewChild('pause') pause: ElementRef;

  private sub: Subscription;
  private timer$: Observable<any>;

  ngOnInit() {

    const start$ = Observable
      .fromEvent(this.start.nativeElement, 'click')
      .map(() => true);

    const pause$ = Observable
      .fromEvent(this.pause.nativeElement, 'click')
      .map(() => false);

    const interval = 1000 // 1sec
    const duration = 10 // 10 sec

    this.timer$ = Observable
      .merge(start$, pause$)
      .distinctUntilChanged()
      .switchMap(resume =>
        resume ?
          Observable
            .timer(0, interval)
            .takeUntil(Observable.timer(duration * interval + interval)) :
          Observable.never())
      .scan((count: number) => count + 1, 0)
      .takeWhile((count: number) => count <= duration)
      .finally(() => console.log('done'));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
