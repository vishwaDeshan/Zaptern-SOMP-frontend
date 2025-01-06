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
        pattern: 'Please use only letters.',
      },
      lastName: {
        required: 'Last name is required.',
        maxlength: 'Last name cannot exceed 50 characters.',
        pattern: 'Please use only letters.',
      },
      middleName: {
        maxlength: 'Last name cannot exceed 50 characters.',
        pattern: 'Please use only letters.',
      },
      gender: {
        required: 'Gender is required.',
      },
      pronouns: {
        required: 'Pronouns is required.',
      },
      dateOfBirth: {
        required: 'Date of birth is required.',
        pattern: 'Please enter valid date.',
      },
      phoneNumber: {
        required: 'Phone number is required.',
        pattern: 'Please enter a valide phone number.',
      },
      email: {
        required: 'Email is required.',
        pattern: 'Please enter a valid email address.',
      },
      nationalId: {
        required: 'National ID is required.',
        pattern: 'Please enter a valid national ID.',
      },
      nationality: {
        required: 'Nationality is required',
        pattern: 'Please select a valid nationality',
      },
      street: {
        required: 'Street is reuired',
        maxlength: 'Street cannot exceed 100 characters.',
        pattern: 'Please use only letters, numbers and special characters.',
      },
      zipCode: {
        requied: 'ZIP code is required',
        maxlenght: 'ZIP code cannot exceed 5 characters.',
        pattern: 'Please use only numbers.',
      },
      hobbies: {},
      otherHobbies: {
        pattern: 'Please use only letters, numbers and special characters.',
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
      middleName: [
        '',
        [
          Validators.maxLength(50),
          Validators.pattern(onlyAlphabeticCharsRegex),
        ],
      ],
      gender: ['', [Validators.required]],
      pronouns: ['', [Validators.required]],
      dateOfBirth: [
        '',
        [Validators.required, Validators.pattern(onlyAlphabeticCharsRegex)], //change
      ],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(onlyAlphabeticCharsRegex)], //change
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(onlyAlphabeticCharsRegex)], //change
      ],
      nationalId: [
        '',
        [Validators.required, Validators.pattern(onlyAlphabeticCharsRegex)], //change
      ],
      nationality: [
        '',
        [Validators.required, Validators.pattern(onlyAlphabeticCharsRegex)], //change
      ],
      street: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(onlyAlphabeticCharsRegex),
        ], //change
      ],
      zipCode: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern(onlyAlphabeticCharsRegex),
        ], //change
      ],
      hobbies: ['', []],
      otherHobbies: [
        '',
        [
          Validators.pattern(onlyAlphabeticCharsRegex), //change
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
