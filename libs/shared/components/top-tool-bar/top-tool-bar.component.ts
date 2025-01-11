import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'somp-tool-top-bar',
  standalone: true,
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.scss'],
  imports: [CommonModule],
})
export class ToolTopBarComponent implements OnChanges {
  @Input() currentPage: string = 'Personal Information';
  @Input() formSaving: boolean = false;
  @Input() formSaved: boolean = false;
  saveStatus: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formSaving'] && this.formSaving) {
      this.saveStatus = 'Saving...';
    }
    if (changes['formSaved']) {
      this.showSaveStatus('Last Saved', new Date());
    }
  }

  showSaveStatus(status: string, timestamp: Date): void {
    this.saveStatus = `${status} at ${timestamp.toLocaleTimeString()}`;
  }
}
