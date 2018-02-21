import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ProgressComponent } from './progress/progress.component';
import { TimerComponent } from './timer/timer.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { SvgProgressComponent } from './svg-progress/svg-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ProgressComponent,
    ListComponent,
    TodoComponent,
    NewComponent,
    SvgProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
