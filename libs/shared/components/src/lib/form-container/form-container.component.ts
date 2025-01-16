import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'somp-form-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss',
})
export class FormContainerComponent {
  @Input() showRequiredInput: boolean = true;
}
