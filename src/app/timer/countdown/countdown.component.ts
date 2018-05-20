import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.styl']
})
export class CountdownComponent implements OnInit {
  @Input() interval: number = 1000;
  @Input() duration: number = 2 * 60;

  @ViewChild('start') start: ElementRef;
  @ViewChild('pause') pause: ElementRef;

  timer$: Observable<number>;

  ngOnInit() {
    // Use OnInit to access nativeElement
    const start$ = Observable
      .fromEvent(this.start.nativeElement, 'click')
      .mapTo(true);

    const pause$ = Observable
      .fromEvent(this.pause.nativeElement, 'click')
      .mapTo(false);

    const takeUntil = this.duration * this.interval + this.interval;

    this.timer$ = Observable
      .merge(start$, pause$)
      .distinctUntilChanged()
      .switchMap(resume => resume
        ? Observable.timer(0, this.interval)
        : Observable.never<number>())
      .scan((count: number) => count + 1, 0)
      .takeWhile((count: number) => count <= this.duration)
      .startWith(0);
  }
}
