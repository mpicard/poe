import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { DatabaseService } from './database.service';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ProgressComponent } from './progress/progress.component';
import { reducer } from './store';
import { TimerPipe } from './timer.pipe';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ListComponent,
    TodoComponent,
    NewComponent,
    TimerPipe,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [TodoService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
