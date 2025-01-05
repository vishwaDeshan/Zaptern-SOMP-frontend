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
      import('@zaptern-somp-frontend/feature').then(
        (m) => m.PersonalDetailsComponent
      ),
  },
  {
    path: 'educational-details',
    loadComponent: () =>
      import('@zaptern-somp-frontend/feature').then(
        (m) => m.EducationalBackgroundComponent
      ),
  },
  {
    path: 'educational-details',
    loadComponent: () =>
      import('@zaptern-somp-frontend/feature').then(
        (m) => m.EducationalBackgroundComponent
      ),
  },
  {
    path: 'experience-info',
    loadComponent: () =>
      import('@zaptern-somp-frontend/feature').then(
        (m) => m.ExperienceInfoComponent
      ),
  },
  {
    path: 'project-details',
    loadComponent: () =>
      import('@zaptern-somp-frontend/feature').then(
        (m) => m.ProjectDetailsComponent
      ),
  },
  {
    path: 'health-info',
    loadComponent: () =>
      import('@zaptern-somp-frontend/feature').then(
        (m) => m.HealthInfoComponent
      ),
  },
  {
    path: 'info-summary',
    loadComponent: () =>
      import('@zaptern-somp-frontend/feature').then(
        (m) => m.InfoSummaryComponent
      ),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
