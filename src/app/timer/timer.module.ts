import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CountdownComponent } from './countdown/countdown.component';
import { ProgressComponent } from './progress/progress.component';
import { reducer } from './store';
import { TimerPipe } from './timer.pipe';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('timer', reducer)
  ],
  declarations: [
    CountdownComponent,
    ProgressComponent,
    TimerPipe
  ],
  exports: [
    CountdownComponent,
    ProgressComponent
  ]
})
export class TimerModule { }
