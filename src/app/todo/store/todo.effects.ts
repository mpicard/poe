import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as action from './todo.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private service: TodoService
  ) { }

  @Effect()
  loadTodos$ = this.actions$
    .ofType(action.LOAD_TODOS)
    .switchMap(() => this.service
      .getTodos()
      .map(todos => new action.LoadTodosDone(todos))
      .catch(err => of(new action.LoadTodosFail(err))));

  @Effect()
  toggleTodo$ = this.actions$
    .ofType(action.TOGGLE_TODO)
    .map((action: action.ToggleTodo) => action.payload)
    .switchMap(todo => this.service
      .toggleTodo(todo)
      .map(todo => new action.ToggleTodoDone(todo))
      .catch(err => of(new action.ToggleTodoFail(err))));

  @Effect()
  updateTodo$ = this.actions$
    .ofType(action.UPDATE_TODO)
    .map((action: action.UpdateTodo) => action.payload)
    .switchMap(todo => this.service
      .updateTodo(todo)
      .map(() => new action.UpdateTodoDone(todo))
      .catch(err => of(new action.UpdateTodoFail(err))));
}
