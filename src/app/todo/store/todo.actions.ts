import { Action } from '@ngrx/store';

import { Todo } from './todo.models';

export const LOAD_TODOS = '[Todos] load';

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export const LOAD_TODOS_DONE = '[Todos] load+';

export class LoadTodosDone implements Action {
  readonly type = LOAD_TODOS_DONE;
  constructor(public payload: Todo[]) { }
}

export const LOAD_TODOS_FAIL = '[Todos] load!';

export class LoadTodosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;
  constructor(public payload: any) { }
}

export const TOGGLE_TODO = '[Todo] toggle';

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: Todo) { }
}

export const TOGGLE_TODO_DONE = '[Todo] toggle+';

export class ToggleTodoDone implements Action {
  readonly type = TOGGLE_TODO_DONE;
  constructor(public payload: Todo) { }
}

export const TOGGLE_TODO_FAIL = '[Todo] toggle!';

export class ToggleTodoFail implements Action {
  readonly type = TOGGLE_TODO_FAIL;
  constructor(public payload: any) { }
}

export const UPDATE_TODO = '[Todo] update';

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: Todo) { }
}

export const UPDATE_TODO_DONE = '[Todo] update+';

export class UpdateTodoDone implements Action {
  readonly type = UPDATE_TODO_DONE;
  constructor(public payload: Todo) { }
}

export const UPDATE_TODO_FAIL = '[Todo] update!';

export class UpdateTodoFail implements Action {
  readonly type = UPDATE_TODO_FAIL;
  constructor(public payload: any) { }
}

export const SELECT_TODO = '[Todo] select';

export class SelectTodo implements Action {
  readonly type = SELECT_TODO;
  constructor(public payload: Todo) { }
}

export type TodoAction =
  | LoadTodos
  | LoadTodosDone
  | LoadTodosFail
  | ToggleTodo
  | ToggleTodoDone
  | ToggleTodoFail
  | SelectTodo
  | UpdateTodo
  | UpdateTodoDone
  | UpdateTodoFail;
