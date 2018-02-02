import { AfterViewInit, Component, Input } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.styl']
})
export class TodoComponent implements AfterViewInit {
  @Input() todo: any;

  ngAfterViewInit() { }

  constructor(private service: TodoService) { }

  toggle() {
    // this.todo.done = !this.todo.done;
    if (this.todo.done) {
      this.service.markNotDone(this.todo.id).subscribe();
    } else {
      this.service.markDone(this.todo.id).subscribe();
    }
  }
}
