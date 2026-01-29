import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import * as TaskActions from '../../store/tasks/tasks.actions';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
@Input() userId!: string;
  @Input() taskToEdit: Task | null = null;

  title = '';
  description = '';
  priority = 3;
  dueDate = '';
  editMode = false;

  constructor(private store: Store) {}

  ngOnChanges() {
    if (this.taskToEdit) {
      this.editMode = true;
      this.title = this.taskToEdit.title;
      this.description = this.taskToEdit.description;
      this.priority = this.taskToEdit.priority;
      this.dueDate = this.taskToEdit.dueDate;
    }
  }

  save() {
    const task: Task = {
      id: this.editMode ? this.taskToEdit!.id : uuidv4(),
      userId: this.userId,
      title: this.title,
      description: this.description,
      priority: this.priority,
      dueDate: this.dueDate,
      completed: this.editMode ? this.taskToEdit!.completed : false
    };

    if (this.editMode) {
      this.store.dispatch(TaskActions.updateTask({ task }));
    } else {
      this.store.dispatch(TaskActions.addTask({ task }));
    }

    this.reset();
  }

  cancel() {
    this.reset();
  }

  reset() {
    this.title = '';
    this.description = '';
    this.priority = 3;
    this.dueDate = '';
    this.editMode = false;
    this.taskToEdit = null;
  }
}
