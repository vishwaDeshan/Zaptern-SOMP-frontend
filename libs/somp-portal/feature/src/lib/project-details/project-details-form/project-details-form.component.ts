import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'somp-project-details-form',
  standalone: true,
  templateUrl: './project-details-form.component.html',
  styleUrls: ['./project-details-form.component.scss'],
  imports: [CommonModule], // Import CommonModule if necessary
})
export class ProjectDetailsFormComponent {}
