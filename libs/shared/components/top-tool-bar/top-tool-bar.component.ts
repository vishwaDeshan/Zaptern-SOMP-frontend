import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'somp-tool-top-bar',
  standalone: true,
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.scss'],
  imports: [CommonModule],
})
export class ToolTopBarComponent implements OnInit {
  @Input() currentPage: string = 'Personal Information';
  saveStatus: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.showSaveStatus('Last Saved', new Date());
  }

  showSaveStatus(status: string, timestamp: Date): void {
    this.saveStatus = `${status} at ${timestamp.toLocaleTimeString()}`;
  }
}
