import * as actions from './todo.actions';
import { TodoState } from './todo.models';

export const initialState: TodoState = {
  entities: {},
  selected: null,
  loaded: false,
  loading: false
};

export function reducer(
  state: TodoState = initialState,
  action: actions.TodoAction
): TodoState {

  switch (action.type) {

    case actions.LOAD_TODOS: {
      return { ...state, loading: true };
    }

    case actions.LOAD_TODOS_DONE: {
      const entities = action.payload.reduce(
        (entities, e) => ({ ...entities, [e._id]: e }),
        { ...state.entities }
      );
      return { ...state, entities, loading: false, loaded: true };
    }

    case actions.TOGGLE_TODO_DONE:
    case actions.UPDATE_TODO: {
      const entity = action.payload;
      const entities = { ...state.entities, [entity._id]: entity };
      return { ...state, entities };
    }

    default:
      return { ...state };
  }
}
