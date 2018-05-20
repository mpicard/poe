import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoadTodos, ToggleTodo } from './store/todo.actions';
import { Todo, TodoState } from './store/todo.models';
import { getAllTodos } from './store/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.styl']
})
export class TodoComponent implements OnInit {
  constructor(private store: Store<TodoState>) { }

  todos$: Observable<Todo[]> = this.store.select(getAllTodos);

  ngOnInit() {
    this.store.dispatch(new LoadTodos());
  }

  onToggle(todo) {
    this.store.dispatch(new ToggleTodo(todo))
  }

  onSelect(todo) {
    // this.store.dispatch(new SelectTodo(todo));
  }
}
