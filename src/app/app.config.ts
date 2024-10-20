import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { BookEffects } from './books/book.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(appReducer, {}),
   provideStoreDevtools({
    maxAge: 25, // Retains last 25 states
    logOnly: !isDevMode(),  // Restrict extension to log-only mode
  }),
  provideEffects([BookEffects])

]
};
