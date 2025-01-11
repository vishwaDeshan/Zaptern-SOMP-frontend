import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'somp-date-picker',
  standalone: true,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  imports: [CommonModule, NgbDatepickerModule],
})
export class DatePickerComponent {
  @Input() selectedDate: NgbDateStruct | null = null;
  @Input() label: string = 'Select Date';
  @Input() placeholder: string = 'dd/mm/yyyy';
  @Input() isRequired: boolean = false;
  @Input() errorMessage: string | null = null;

  @Output() dateChange = new EventEmitter<NgbDateStruct | undefined>();

  isOpen: boolean = false;

  constructor(private calendar: NgbCalendar, private cdRef: ChangeDetectorRef) {}

  toggleDatePicker(): void {
    this.isOpen = !this.isOpen;
    this.cdRef.detectChanges();
  }

  onDateSelect(date: NgbDateStruct): void {
    this.selectedDate = date;
    this.dateChange.emit(date);
    this.isOpen = false;
  }

  clearDate(): void {
    this.selectedDate = null;
    this.dateChange.emit(undefined);
  }
}
