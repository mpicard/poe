import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.styl']
})
export class NewComponent implements OnInit {
  constructor(private service: TodoService) { }

  content = "";
  focused = false;

  ngOnInit() { }

  async submit() {
    const todo = await this.service.create(this.content);
    // console.log(todo);
    // console.log(this.content);
    // this.db.get().put({
    //   "_id": "test",
    //   "content": this.content,
    //   "done": false
    // });
  }
}
