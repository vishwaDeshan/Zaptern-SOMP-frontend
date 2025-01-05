import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EducationalBackgroundFormComponent } from './educational-background-form/educational-background-form.component';

@Component({
  selector: 'somp-educational-background',
  standalone: true,
  templateUrl: './educational-background.component.html',
  styleUrls: ['./educational-background.component.scss'],
  imports: [CommonModule, EducationalBackgroundFormComponent],
})
export class EducationalBackgroundComponent {}
