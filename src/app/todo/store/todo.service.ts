import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { DatabaseService } from '../../database.service';
import { Todo } from './todo.models';

const type = 'todo';

@Injectable()
export class TodoService extends DatabaseService {

  getTodos() {
    return fromPromise(this.db.allDocs({ include_docs: true }))
      .pluck('rows')
      .map((rows: any[]) => rows.map(row => row.doc));
  }

  createTodo(content: string) {
    return fromPromise(this.db.post({ type, content, done: false }));
  }

  toggleTodo(payload: Todo) {
    const todo = { ...payload, done: !payload.done };
    return fromPromise(this.db.put(payload))
      .map(res => ({ _rev: res.rev, _id: res.id }))
      .map(res => ({ ...todo, ...res }))
  }

  updateTodo(payload: Todo) {
    return fromPromise(this.db.put(payload))
      .map(res => ({ _rev: res.rev, _id: res.id }))
      .map(res => ({ ...payload, ...res }));
  }

  getUpdates(): Observable<Todo> {
    return fromEvent(
      this.db.changes({
        live: true,
        since: 0,
        include_docs: true,
        filter: doc => doc.type === type
      }), 'change');
  }
}
