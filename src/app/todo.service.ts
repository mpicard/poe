import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo/todo.model';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public list(): Observable<Todo[]> {
    return this.http.get<Todo[]>('api/todos');
  }

  public markDone(id: string): Observable<Todo> {
    return this.toggle(id, true);
  }

  public markNotDone(id: string): Observable<Todo> {
    return this.toggle(id, false);
  }

  private toggle(id: string, done: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`api/todos/${id}`, { done });
  }
}
