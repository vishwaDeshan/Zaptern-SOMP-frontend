import {
  AfterContentInit,
  Component,
  ContentChild,
  OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
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
  private debounceTimeMs = 1500; // Debounce time in milliseconds
  form!: FormGroup;

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    if (!this.autoSavableForm) {
      console.error('No form found for AutoSavableFormComponent');
      return;
    }

    this.form = this.autoSavableForm.form;

    // Subscribe to form changes with debounce
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

    // Trigger validation on navigation
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        takeUntil(this.autoSaveUnsubscribe)
      )
      .subscribe(() => {
        if (this.form.dirty || this.form.touched) {
          this.triggerValidations();
        }
      });
  }

  private triggerValidations() {
    if (this.form) {
      this.form.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.autoSaveUnsubscribe.next();
    this.autoSaveUnsubscribe.complete();
  }
}
