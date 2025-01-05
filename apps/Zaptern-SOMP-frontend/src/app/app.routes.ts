import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'applicants-list',
    loadComponent: () =>
      import('@zaptern-somp-frontend/applicants-list').then(
        (m) => m.ApplicantsListComponent
      ),
  },
  {
    path: 'personal-details',
    loadComponent: () =>
      import('@zaptern-somp-frontend/applicants-list').then(
        (m) => m.ApplicantsListComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
