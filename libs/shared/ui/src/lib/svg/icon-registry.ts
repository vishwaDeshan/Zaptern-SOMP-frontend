import { Type } from '@angular/core';
import { EducationIconComponent } from './educaion-icon.component';
import { PersonalInfoIconComponent } from './personal-info-icon.component';
import { ExperienceIconComponent } from './experience-icon.component';
import { PortfolioIconComponent } from './portfolio-icon.component';
import { HealthIconComponent } from './health-icon.component';
import { OverviewIconComponent } from './overview-icon.component';

export const IconRegistry: { [key: string]: Type<any> } = {
  'personal-info.svg': PersonalInfoIconComponent,
  'education.svg': EducationIconComponent,
  'experience.svg': ExperienceIconComponent,
  'portfolio.svg': PortfolioIconComponent,
  'health.svg': HealthIconComponent,
  'overview.svg': OverviewIconComponent,
};
