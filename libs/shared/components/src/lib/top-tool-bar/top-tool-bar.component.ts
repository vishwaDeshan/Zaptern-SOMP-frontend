import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'somp-tool-top-bar',
  standalone: true,
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.scss'],
  imports: [CommonModule],
})
export class ToolTopBarComponent implements OnChanges, OnInit {
  @Input() formSaving: boolean = false;
  @Input() formSaved: boolean = false;
  @Input() showTopToolBar: boolean = false;
  @Input() pageTitle = '';
  private minSavingDisplayMs = 550;

  saveStatus: string | null = null;

  private isSaving: boolean = false;
  private saveTimeout: any;

  ngOnInit(): void {
    const savedStatus = localStorage.getItem('saveStatus');
    if (savedStatus) {
      this.saveStatus = savedStatus;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formSaving']) {
      if (this.formSaving && !this.isSaving) {
        this.saveStatus = 'Saving...';
        this.isSaving = true;
      } else if (!this.formSaving && this.isSaving) {
        if (
          this.formSaved ||
          (changes['formSaved'] && this.formSaved && !this.formSaving)
        ) {
          setTimeout(() => {
            clearTimeout(this.saveTimeout);
            this.showSaveStatus('Last Saved', new Date());
            this.isSaving = false;
          }, this.minSavingDisplayMs);
        }
      }
    }
  }

  showSaveStatus(status: string, timestamp: Date): void {
    this.saveStatus = `${status} at ${timestamp.toLocaleTimeString()}`;
    localStorage.setItem('saveStatus', this.saveStatus);
  }

  VisibleTopToolBar(): boolean {
    console.log('this', this.showTopToolBar);

    return this.showTopToolBar;
  }
}
