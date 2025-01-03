import { createAction, props } from '@ngrx/store';

export const loadApplicants = createAction('[Applicant List] Load Applicants');
export const loadApplicantsSuccess = createAction(
  '[Applicant List] Load Applicants Success',
  props<{ applicants: any[] }>()
);
export const loadApplicantsFailure = createAction(
  '[Applicant List] Load Applicants Failure',
  props<{ error: any }>()
);
