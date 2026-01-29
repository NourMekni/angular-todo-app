import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './store/auth/auth.reducer';
import { tasksReducer } from './store/tasks/tasks.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
      provideStore({
      auth: authReducer,
      tasks: tasksReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
