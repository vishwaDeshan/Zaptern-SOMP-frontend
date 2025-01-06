import {
  AfterContentChecked,
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
  map,
  takeUntil,
} from 'rxjs/operators';
import { AutoSavableForm } from './auto-savable-form.interface';
import { AUTOSAVABLEFORM } from './auto-savable-form.token';

@Component({
  selector: 'somp-auto-savable-form',
  template: `<div (cdkObserveContent)="onContentChange()">
    <ng-content></ng-content>
  </div>`,
})
export class AutoSavableFormComponent
  implements AfterContentInit, OnDestroy, AfterContentChecked
{
  @ContentChild(AUTOSAVABLEFORM) autoSavableForm!: AutoSavableForm;
  private autoSaveUnsubscribe = new Subject<void>();
  form!: FormGroup;
  onFormLoadValidationsTriggered = false;

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    // Access the form and subscribe to value changes
    this.form = this.autoSavableForm.form;
    this.form.valueChanges
      .pipe(takeUntil(this.autoSaveUnsubscribe), distinctUntilChanged())
      .subscribe((formData) => {
        this.autoSavableForm.formStatus.emit({
          isFormValid: this.form.valid,
          isFormDirty: this.form.dirty,
        });
        this.autoSavableForm.formValuesChange.emit(formData);
      });

    this.triggerAutoSave();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        takeUntil(this.autoSaveUnsubscribe)
      )
      .subscribe(() => {
        if (this.form.invalid && (this.form.dirty || this.form.touched)) {
          this.triggerValidations();
        }
      });
  }

  // Detect content change for validation trigger
  onContentChange() {
    if (!this.onFormLoadValidationsTriggered) {
      this.triggerValidationOnFormLoad();
    }
  }

  // Trigger form validation if required
  private triggerValidationOnFormLoad() {
    const { visitedRoutes, formData } = this.autoSavableForm;
    if (
      visitedRoutes?.length &&
      visitedRoutes?.includes(this.router.url) &&
      ((Array.isArray(formData) && formData.length > 0) ||
        (!Array.isArray(formData) && formData))
    ) {
      this.triggerValidations();
      this.onFormLoadValidationsTriggered = true;
    }
  }

  // Mark form as touched and trigger validations
  private triggerValidations(): void {
    this.form.markAllAsTouched();
    this.autoSavableForm.validate();
    this.autoSavableForm.formStatus.emit({
      isFormValid: this.form.valid,
      isFormDirty: this.form.dirty,
    });
  }

  // Trigger auto-save functionality on form value change
  private triggerAutoSave(): void {
    this.form.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        map((formValue: unknown) => {
          if (this.form.valid && this.form.dirty) {
            this.autoSavableForm.autoSave.emit(formValue);
          }
        }),
        takeUntil(this.autoSaveUnsubscribe)
      )
      .subscribe();
  }

  ngAfterContentChecked(): void {
    if (this.onFormLoadValidationsTriggered) {
      this.form.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.autoSaveUnsubscribe.next();
  }
}
