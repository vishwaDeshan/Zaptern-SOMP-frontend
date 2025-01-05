import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoSummaryFormComponent } from './info-summary-form/info-summary-form.component'; // Import the form component

@Component({
  selector: 'somp-info-summary',
  standalone: true,
  templateUrl: './info-summary.component.html',
  styleUrls: ['./info-summary.component.scss'],
  imports: [CommonModule, InfoSummaryFormComponent], // Import the form component
})
export class InfoSummaryComponent {
  // You can add any additional logic for the summary page here if needed.
}
