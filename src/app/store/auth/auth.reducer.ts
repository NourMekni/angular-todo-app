import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '../../models/user.model';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { email }) => ({ 
    user: { email } 
  })),
  on(AuthActions.logout, () => initialState)
);