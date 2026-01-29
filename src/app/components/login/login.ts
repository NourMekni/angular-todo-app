import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth/auth.actions';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = '';

  constructor(private store: Store) {}

  login() {
    if (this.email) {
      this.store.dispatch(AuthActions.login({ email: this.email }));
    }
  }

}
