import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  todos = [];

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.list().subscribe(todos => {
      this.todos = todos;
    });
  }
}
