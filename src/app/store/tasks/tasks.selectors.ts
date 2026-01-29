import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TasksState } from './tasks.reducer';

export const selectTasks = createFeatureSelector<TasksState>('tasks');

export const selectAllTasks = createSelector(
  selectTasks, 
  state => state.tasks
);

export const selectUserTasks = (userId: string) => createSelector(
  selectAllTasks,
  tasks => tasks.filter(t => t.userId === userId)
);

export const selectPendingTasks = (userId: string) => createSelector(
  selectAllTasks,
  tasks => tasks.filter(t => t.userId === userId && !t.completed)
);

export const selectCompletedTasks = (userId: string) => createSelector(
  selectAllTasks,
  tasks => tasks.filter(t => t.userId === userId && t.completed)
);