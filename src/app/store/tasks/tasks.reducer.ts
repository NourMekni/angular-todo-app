import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './tasks.actions';
import { Task } from '../../models/task.model';

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: []
};

export const tasksReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { task }) => ({
    tasks: [...state.tasks, task]
  })),
  on(TaskActions.updateTask, (state, { task }) => ({
    tasks: state.tasks.map(t => t.id === task.id ? task : t)
  })),
  on(TaskActions.deleteTask, (state, { id }) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  })),
  on(TaskActions.toggleTask, (state, { id }) => ({
    tasks: state.tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  })),
  on(TaskActions.clearTasks, () => initialState)
);