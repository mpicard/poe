import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TodoState } from './todo.models';

export const getTodoState = createFeatureSelector<TodoState>('todo');

export const getTodoEntites = createSelector(getTodoState, s => s.entities);

export const getAllTodos = createSelector(getTodoEntites, Object.values);

export const getSelectedTodo = createSelector(getTodoState, s => s.entities[s.selected]);
