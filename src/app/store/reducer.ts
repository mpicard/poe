import { Todo } from '../models';
import * as actions from './actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  todos: Todo[],
}

export const initialState: State = {
  loading: false,
  loaded: false,
  todos: []
}

export function reducer(
  state: State = initialState,
  action: actions.TodoAction
) {
  switch (action.type) {

    case actions.LOAD_TODOS:
      return { ...state, loading: true };

    case actions.LOAD_TODOS_OK:
      const todos = action.payload;
      return { ...state, loading: false, loaded: true, todos };

    case actions.LOAD_TODOS_FAIL:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}
