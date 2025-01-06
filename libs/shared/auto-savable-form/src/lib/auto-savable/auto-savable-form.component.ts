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
  template: `<div>
    <ng-content></ng-content>
  </div>`,
})
export class AutoSavableFormComponent implements AfterContentInit, OnDestroy {
  @ContentChild(AUTOSAVABLEFORM) autoSavableForm!: AutoSavableForm;
  private autoSaveUnsubscribe = new Subject<void>();
  form!: FormGroup;

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    // Access form and subscribe to value changes
    this.form = this.autoSavableForm.form;

    this.form.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500), // Adjust debounce as needed
        takeUntil(this.autoSaveUnsubscribe)
      )
      .subscribe(() => {
        // Auto-save if form is dirty and valid
        if (this.form.valid && this.form.dirty) {
          this.autoSavableForm.autoSave.emit(this.form.value);
        }
      });

    // Trigger validation checks when navigating away
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
    this.form.markAllAsTouched();
  }

  ngOnDestroy(): void {
    this.autoSaveUnsubscribe.next();
  }
}
