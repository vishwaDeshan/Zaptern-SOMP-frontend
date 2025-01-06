import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormContainerComponent } from '@zaptern-somp-frontend/form-container';
import { RestrictSpecialCharactersDirective } from '@zaptern-somp-frontend/directives';

@Component({
  selector: 'somp-personal-details-form',
  standalone: true,
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormContainerComponent,
    RestrictSpecialCharactersDirective,
  ],
})
export class PersonalDetailsFormComponent {
  personalDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalDetailsForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      middleName: ['', [Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
}
