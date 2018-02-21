import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DatabaseService } from './database.service';


const type = 'todo';

@Injectable()
export class TodoService extends DatabaseService {

  list() {
    return Observable.fromEvent(
      this.db.changes({
        live: true,
        since: 0,
        include_docs: true,
        filter: doc => doc.type === type
      }), 'change');
  }

  create(content: string) {
    return this.db.post({ type, content, done: false });
  }

  async toggle(todo) {
    return await this.db.put({ ...todo, done: !todo.done });
  }
}
