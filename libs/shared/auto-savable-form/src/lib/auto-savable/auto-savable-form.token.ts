import { InjectionToken } from '@angular/core';
import { AutoSavableForm } from './auto-savable-form.interface';

export const AUTOSAVABLEFORM = new InjectionToken<AutoSavableForm>(
  'AutoSavableForm'
);
