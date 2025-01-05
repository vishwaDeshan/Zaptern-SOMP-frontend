import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectDetailsFormComponent } from './project-details-form/project-details-form.component'; // Import the form component

@Component({
  selector: 'somp-project-details',
  standalone: true,
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  imports: [CommonModule, ProjectDetailsFormComponent],
})
export class ProjectDetailsComponent {}
