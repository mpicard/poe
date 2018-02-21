import { Component, OnDestroy, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(private service: TodoService) { }

  todos = {};

  private sub;

  ngOnInit() {
    this.sub = this.service
      .list()
      .subscribe((diff: any) => {
        this.todos[diff.id] = diff.doc;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get list() {
    return Object.values(this.todos);
  }
}
