import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'somp-date-picker',
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  @Input() selectedDate: NgbDateStruct | null = null;
  @Input() label: string = 'Select Date';
  @Input() isRequired: boolean = false;
  @Input() errorMessage: string | null = null;

  @Output() dateChange = new EventEmitter<NgbDateStruct>();

  onDateChange(date: NgbDateStruct | undefined): void {
    this.dateChange.emit(date);
  }
}
