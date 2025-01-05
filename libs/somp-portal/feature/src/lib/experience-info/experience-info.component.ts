import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceInfoFormComponent } from './experience-info-form/experience-info-form.component';

@Component({
  selector: 'somp-experience-info',
  standalone: true,
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.scss'],
  imports: [CommonModule, ExperienceInfoFormComponent],
})
export class ExperienceInfoComponent {}
