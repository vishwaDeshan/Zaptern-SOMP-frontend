import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
import {
  ALPHABETIC_CHARS_REGEX,
  PHONE_NUMBER_REGEX,
  DATE_REGEX,
  ALPHANUMERIC_SPECIAL_REGEX,
  NATIONAL_ID_REGEX,
  EMAIL_REGEX,
  NUMBERS_REGEX,
} from '@zaptern-somp-frontend/helpers';
import { PersonalDetails } from '@zaptern-somp-frontend/model';

@Component({
  selector: 'somp-personal-details-form',
  standalone: true,
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormContainerComponent],
})
export class PersonalDetailsFormComponent implements OnInit, OnChanges {
  @Input() personalDetails: PersonalDetails | undefined;

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
        required: 'Pronoun is required.',
      },
      dateOfBirth: {
        required: 'Date of Birthday is required.',
        pattern: 'Please enter valid date.',
      },
      phoneNumber: {
        required: 'Phone number is required.',
        pattern: 'Please enter a valide phone number.',
      },
      landline: {
        pattern: 'Please enter a valid phone number.',
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
        required: 'Nationality is required.',
      },
      street: {
        required: 'Street is required',
        maxlength: 'Street cannot exceed 100 characters.',
        pattern: 'Please use only letters, numbers and special characters.',
      },
      city: {
        required: 'City is required',
        maxlength: 'City cannot exceed 100 characters.',
        pattern: 'Please use only letters',
      },
      zipCode: {
        required: 'ZIP code is required',
        maxlength: 'ZIP code cannot exceed 5 characters.',
        pattern: 'Please use only numbers.',
      },
      hobbies: {
        required: 'Hobbies is required.',
      },
      otherHobbies: {
        maxlength: 'Other hobbies cannot exceed 20 characters.',
        pattern: 'Please use only letters, numbers and special characters.',
      },
      anyComments: {
        maxlength: 'Any comments cannot exceed 100 characters.',
        pattern: 'Please use only letters, numbers and special characters.',
      },
    };

    this.formErrorMsgProcessor = FormValidator.intValidator(
      this.validationMessages
    );
  }

  ngOnInit(): void {
    this.initForm();
    if (this.personalDetails) {
      this.personalDetailsForm?.patchValue(this.personalDetails);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personalDetails'] && this.personalDetails) {
      this.personalDetailsForm?.patchValue(this.personalDetails);
    }
  }

  private initForm(): void {
    this.personalDetailsForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(ALPHABETIC_CHARS_REGEX),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(ALPHABETIC_CHARS_REGEX),
        ],
      ],
      middleName: [
        '',
        [Validators.maxLength(50), Validators.pattern(ALPHABETIC_CHARS_REGEX)],
      ],
      gender: ['', [Validators.required]],
      pronouns: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required, Validators.pattern(DATE_REGEX)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(PHONE_NUMBER_REGEX)],
      ],
      landline: ['', [Validators.pattern(PHONE_NUMBER_REGEX)]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      nationalId: [
        '',
        [Validators.required, Validators.pattern(NATIONAL_ID_REGEX)],
      ],
      nationality: ['', [Validators.required]],
      street: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ALPHANUMERIC_SPECIAL_REGEX),
        ],
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern(ALPHABETIC_CHARS_REGEX),
        ],
      ],
      zipCode: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern(NUMBERS_REGEX),
        ],
      ],
      hobbies: ['', [Validators.required]],
      otherHobbies: [
        '',
        [
          Validators.maxLength(20),
          Validators.pattern(ALPHANUMERIC_SPECIAL_REGEX),
        ],
      ],
      anyComments: [
        '',
        [
          Validators.maxLength(100),
          Validators.pattern(ALPHANUMERIC_SPECIAL_REGEX),
        ],
      ],
    });

    this.personalDetailsForm.valueChanges.subscribe(() => {
      this.errorMsgs = this.formErrorMsgProcessor.processMessages(
        this.personalDetailsForm!
      );
    });
  }
}
