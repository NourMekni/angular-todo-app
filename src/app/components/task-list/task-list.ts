import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { User } from '../../models/user.model';
import * as TaskActions from '../../store/tasks/tasks.actions';
import * as AuthActions from '../../store/auth/auth.actions';
import { selectUser } from '../../store/auth/auth.selectors';
import { selectPendingTasks, selectCompletedTasks } from '../../store/tasks/tasks.selectors';
import { TaskForm } from '../task-form/task-form';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskForm],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  user$: Observable<User | null>;
  pendingTasks$!: Observable<Task[]>;
  completedTasks$!: Observable<Task[]>;
  editingTask: Task | null = null;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUser);
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (user) {
        this.pendingTasks$ = this.store.select(selectPendingTasks(user.email));
        this.completedTasks$ = this.store.select(selectCompletedTasks(user.email));
      }
    });
  }

  toggleTask(id: string) {
    this.store.dispatch(TaskActions.toggleTask({ id }));
  }

  editTask(task: Task) {
    this.editingTask = task;
  }

  deleteTask(id: string) {
    if (confirm('Supprimer cette tâche ?')) {
      this.store.dispatch(TaskActions.deleteTask({ id }));
    }
  }

  logout() {
    this.store.dispatch(TaskActions.clearTasks());
    this.store.dispatch(AuthActions.logout());
  }
}
