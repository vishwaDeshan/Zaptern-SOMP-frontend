import { createAction, props } from '@ngrx/store';
import { PersonalDetails } from '@zaptern-somp-frontend/model';

export const loadPersonalDetails = createAction(
  '[Personal Details] Load Personal Details',
  props<{ id: string }>()
);

export const updatePersonalDetails = createAction(
  '[Personal Details] Update Personal Details',
  props<{ personalDetails: PersonalDetails }>()
);

export const loadPersonalDetailsSuccess = createAction(
  '[Personal Details] Load Personal Details Success',
  props<{ personalDetails: PersonalDetails }>()
);

export const loadPersonalDetailsFailure = createAction(
  '[Personal Details] Load Personal Details Failure',
  props<{ error: any }>()
);
