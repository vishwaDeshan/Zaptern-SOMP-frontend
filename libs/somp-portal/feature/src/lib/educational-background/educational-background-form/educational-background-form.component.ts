import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TimeLineComponent,
  FormContainerComponent,
} from '@zaptern-somp-frontend/components';

@Component({
  selector: 'somp-educational-background-form',
  standalone: true,
  templateUrl: './educational-background-form.component.html',
  styleUrls: ['./educational-background-form.component.scss'],
  imports: [
    CommonModule,
    TimeLineComponent,
    FormContainerComponent,
    ReactiveFormsModule,
  ],
})
export class EducationalBackgroundFormComponent {
  educationForm: FormGroup;
  isModalOpen: boolean = false;
  isDoing: boolean = false;
  editEducationDetailsId: string | undefined;

  constructor(private fb: FormBuilder) {
    this.educationForm = this.fb.group({
      instituteName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      description: [''],
      isDoing: [false],
    });
  }

  ngOnInit(): void {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onResetForm() {
    this.educationForm.reset();
  }

  onSubmit() {
    if (this.educationForm.invalid) {
      return;
    }

    console.log('Form Data:', this.educationForm.value);
    this.closeModal();
    this.educationForm.reset();
  }

  timelineData = [
    {
      id: '1',
      title: 'Joined University',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dateRange: '2015 Aug - 2020 Sep',
      name: 'Vishwa W.',
    },
    {
      id: '2',
      title: 'Started Internship',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dateRange: '2021 Jan - 2021 Dec',
      name: 'Vishwa W.',
    },
    {
      id: '3',
      title: 'Full-time Job',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dateRange: '2022 Jan - Present',
      name: 'Vishwa W.',
    },
  ];
}
