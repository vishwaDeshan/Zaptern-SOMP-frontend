import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { navbarFeature } from '../../../../libs/common/data-access/+state/navigation/nav-bar.selectors'; // todo create a separte lib for common components
import { applicantReducer } from '@zaptern-somp-frontend/applicants-list';
import { ApplicantEffects } from '@zaptern-somp-frontend/applicants-list';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideStore(),
    provideState({ name: 'applicant', reducer: applicantReducer }),
    provideState(navbarFeature),
    provideEffects([ApplicantEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
