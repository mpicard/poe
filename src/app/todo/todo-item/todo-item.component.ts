import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../store/todo.models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.styl']
})
export class TodoItemComponent implements OnInit {
  constructor() { }

  @Input() todo: Todo;

  @Output() toggled = new EventEmitter<Todo>();
  // @Output() selected = new EventEmitter<Todo>();

  ngOnInit() { }

  onToggle() {
    this.toggled.emit(this.todo);
  }

  onSelect() {
    // this.selected.emit(this.todo);
  }
}
