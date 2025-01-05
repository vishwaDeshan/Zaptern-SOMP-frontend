import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'somp-experience-info-form',
  standalone: true,
  templateUrl: './experience-info-form.component.html',
  styleUrls: ['./experience-info-form.component.scss'],
  imports: [CommonModule], // Import CommonModule to access ngFor, ngIf, etc.
})
export class ExperienceInfoFormComponent {}
