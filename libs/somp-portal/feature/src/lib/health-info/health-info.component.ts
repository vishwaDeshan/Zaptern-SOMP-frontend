import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HealthInfoFormComponent } from './health-info-form/health-info-form.component'; // Import the form component

@Component({
  selector: 'somp-health-info',
  standalone: true,
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.scss'],
  imports: [CommonModule, HealthInfoFormComponent], // Import form component
})
export class HealthInfoComponent {}
