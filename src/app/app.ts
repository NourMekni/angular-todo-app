import { Component, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { selectUser } from './store/auth/auth.selectors';
import { Login } from './components/login/login';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, Login, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  user$: Observable<User | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUser);
  }

}
