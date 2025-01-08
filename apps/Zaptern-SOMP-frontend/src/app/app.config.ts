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
import { ApplicantEffects } from '@zaptern-somp-frontend/applicants-list';
import { applicantFeature } from '@zaptern-somp-frontend/applicants-list';
import { personalDetailsFeature } from '@zaptern-somp-frontend/data-access';
import { PersonalDetailsEffects } from '@zaptern-somp-frontend/data-access';

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
    provideState(applicantFeature),
    provideState(navbarFeature),
    provideState(personalDetailsFeature),
    provideEffects([ApplicantEffects, PersonalDetailsEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
