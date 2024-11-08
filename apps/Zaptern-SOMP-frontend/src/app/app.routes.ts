import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'student-list',
    loadComponent: () =>
      import('@zaptern-somp-frontend/student-list').then(
        (m) => m.StudentListComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
];
