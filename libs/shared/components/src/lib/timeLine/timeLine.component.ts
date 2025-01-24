import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timelineData } from '@zaptern-somp-frontend/common/models';

@Component({
  selector: 'somp-time-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeLine.component.html',
  styleUrl: './timeLine.component.scss',
})
export class TimeLineComponent {
  @Input() timelineData: timelineData[] = [];
  @Output() editEducationDetailsId = new EventEmitter<string>();

  editEducationDetails(id: string) {
    this.editEducationDetailsId.emit(id);
  }
}
