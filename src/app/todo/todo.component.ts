import { AfterViewInit, Component, Input } from '@angular/core';

import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.styl']
})
export class TodoComponent implements AfterViewInit {

  @Input() todo: any;

  constructor(private service: TodoService) { }

  ngAfterViewInit() { }

  toggle() {
    this.service.toggle(this.todo);
  }

  update() {
    console.log(this.todo);
    // this.service.update(this.todo);
  }
}
