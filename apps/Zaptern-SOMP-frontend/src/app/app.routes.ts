import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'applicants-list', // Update path to match the URL
    loadComponent: () =>
      import('@zaptern-somp-frontend/applicants-list').then(
        (m) => m.ApplicantsListComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
];
