import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface AutoSavableForm {
  form: FormGroup;
  formValuesChange: EventEmitter<any>;
  formStatus: EventEmitter<{ isFormValid: boolean; isFormDirty: boolean }>;
  autoSave: EventEmitter<any>;
  validate: () => void;
  visitedRoutes?: string[];
  formData?: any;
}
