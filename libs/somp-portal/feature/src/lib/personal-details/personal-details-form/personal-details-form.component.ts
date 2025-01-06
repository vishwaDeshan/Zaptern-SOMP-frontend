import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormContainerComponent } from '@zaptern-somp-frontend/form-container';
import {
  ErrorMessageProcessor,
  FormValidator,
} from '@zaptern-somp-frontend/services';
import { onlyAlphabeticCharsRegex } from '@zaptern-somp-frontend/helpers';

@Component({
  selector: 'somp-personal-details-form',
  standalone: true,
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormContainerComponent],
})
export class PersonalDetailsFormComponent implements OnInit {
  personalDetailsForm: FormGroup | undefined;
  errorMsgs: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private formErrorMsgProcessor: ErrorMessageProcessor;

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      firstName: {
        required: 'First name is required.',
        maxlength: 'First name cannot exceed 50 characters.',
        pattern: 'Invalid characters in first name.',
      },
      lastName: {
        required: 'Last name is required.',
        maxlength: 'Last name cannot exceed 50 characters.',
        pattern: 'Invalid characters in last name.',
      },
    };

    this.formErrorMsgProcessor = FormValidator.intValidator(
      this.validationMessages
    );
  }

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(onlyAlphabeticCharsRegex),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(onlyAlphabeticCharsRegex),
        ],
      ],
    });

    this.personalDetailsForm?.valueChanges.subscribe(() => {
      this.errorMsgs = this.formErrorMsgProcessor.processMessages(
        this.personalDetailsForm!
      );
    });
  }
}
