import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ProgressComponent } from './progress/progress.component';
import { TimerPipe } from './timer.pipe';
import { TimerComponent } from './timer/timer.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ProgressComponent,
    ListComponent,
    TodoComponent,
    NewComponent,
    TimerPipe,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
