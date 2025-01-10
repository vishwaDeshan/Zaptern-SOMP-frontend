import {
  AfterContentInit,
  Component,
  ContentChild,
  OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  takeUntil,
} from 'rxjs/operators';
import { AutoSavableForm } from './auto-savable-form.interface';
import { AUTOSAVABLEFORM } from './auto-savable-form.token';

@Component({
  selector: 'somp-auto-savable-form',
  standalone: true,
  template: `<div>
    <ng-content></ng-content>
  </div>`,
})
export class AutoSavableFormComponent implements AfterContentInit, OnDestroy {
  @ContentChild(AUTOSAVABLEFORM) autoSavableForm!: AutoSavableForm;
  private autoSaveUnsubscribe = new Subject<void>();
  private debounceTimeMs = 1500;
  form!: FormGroup;

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    if (!this.autoSavableForm) {
      console.error('No form found fo');
      return;
    }

    this.form = this.autoSavableForm.form;

    this.form.valueChanges
      .pipe(
        debounceTime(this.debounceTimeMs), // Delay to avoid rapid updates
        distinctUntilChanged(),
        takeUntil(this.autoSaveUnsubscribe)
      )
      .subscribe(() => {
        if (this.form.valid && this.form.dirty) {
          this.autoSavableForm.autoSave.emit(this.form.value);
          this.form.markAsPristine(); // Mark as saved to avoid re-emitting
        }
      });
  }

  ngOnDestroy(): void {
    this.autoSaveUnsubscribe.next();
    this.autoSaveUnsubscribe.complete();
  }
}
