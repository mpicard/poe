export interface Todo {
  _id: string;
  _rev: string;
  content: string;
  done: boolean;
}

export interface TodoState {
  entities: { [id: number]: Todo };
  selected: number;
  loaded: boolean;
  loading: boolean;
}
