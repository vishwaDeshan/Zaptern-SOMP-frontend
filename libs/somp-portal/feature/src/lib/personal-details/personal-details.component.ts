import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';

@Component({
  selector: 'somp-personal-details',
  standalone: true,
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  imports: [CommonModule, PersonalDetailsFormComponent],
})
export class PersonalDetailsComponent {}
