import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects, reducer } from './store';
import { TodoService } from './store/todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('todo', reducer),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    TodoComponent,
    TodoItemComponent
  ],
  exports: [TodoComponent],
  providers: [TodoService, ...effects]
})
export class TodoModule { }
