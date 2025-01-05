import { Component, Inject } from '@angular/core';

@Component({
  selector: 'personal-info-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width="24"
      height="24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12Zm0 1.5c-3.59 0-6.75 1.795-6.75 4.5v.75h13.5v-.75c0-2.705-3.16-4.5-6.75-4.5Z"
        [attr.fill]="isActive ? 'orange' : 'blue'"
      />
    </svg>
  `,
})
export class PersonalInfoIconComponent {
  constructor(@Inject('isActive') public isActive: boolean) {}
}
