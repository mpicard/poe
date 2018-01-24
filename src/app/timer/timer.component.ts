import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.styl']
})
export class TimerComponent implements OnInit {

  @ViewChild('start') start: ElementRef;
  @ViewChild('pause') pause: ElementRef;

  private seconds = 25 * 60;

  ngOnInit() {
    const start$ = Observable
      .fromEvent(this.start.nativeElement, 'click')
      .map(() => true);

    const pause$ = Observable
      .fromEvent(this.pause.nativeElement, 'click')
      .map(() => false);

    Observable
      .merge(start$, pause$)
      .distinctUntilChanged()
      .switchMap(resume =>
        resume ?
          Observable
            .timer(0, 1000)
            .takeUntil(Observable.timer(1e5 + 1e3)) :
          Observable.never()
      )
      .subscribe(() => this.seconds -= 1);
  }

  private get displayMinutes() {
    return Math.floor(this.seconds / 60);
  }

  private get displaySeconds() {
    return String('00' + (this.seconds - (this.displayMinutes * 60))).slice(-2);
  }

}
