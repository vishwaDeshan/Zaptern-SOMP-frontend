import { createAction, props } from '@ngrx/store';
import { EducationBackgroundData } from '@zaptern-somp-frontend/model';

export const loadEducationalDetails = createAction(
  '[Education Background] Load educational Details',
  props<{ applicantId: string }>()
);

export const loadEducationalDetailsSucess = createAction(
  '[Education Background] Load educational Details sucess',
  props<{ educationalDetails: EducationBackgroundData }>()
);

export const loadEducationalDetailsFailure = createAction(
  '[Education Background] Load educational Details failure',
  props<{ error: string }>()
);

export const saveEducationalDetails = createAction(
  '[Education Background] save educational Details',
  props<{ educationalDetails: EducationBackgroundData }>()
);

export const saveEducationalDetailsSucess = createAction(
  '[Education Background] save educational Details sucess',
  props<{ educationalDetails: EducationBackgroundData }>()
);

export const saveEducationalDetailsFailure = createAction(
  '[Education Background] save educational Details failure',
  props<{ error: string }>()
);
