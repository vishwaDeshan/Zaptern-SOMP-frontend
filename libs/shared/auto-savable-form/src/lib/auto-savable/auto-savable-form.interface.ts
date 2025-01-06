import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface AutoSavableForm {
  form: FormGroup;
  autoSave: EventEmitter<any>;
  validate: () => void;
}
