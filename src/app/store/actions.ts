import { Action } from '@ngrx/store';

import { Todo } from '../models';

export const LOAD_TODOS = '[Todo] load todos';
export const LOAD_TODOS_OK = '[Todo] load todos ~';
export const LOAD_TODOS_FAIL = '[Todo] load todos !!';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosOk implements Action {
  readonly type = LOAD_TODOS_OK;
  constructor(public payload: Todo[]) { }
}

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) { }
}

export type TodoAction =
  | LoadTodos
  | LoadTodosOk
  | LoadTodosFail
