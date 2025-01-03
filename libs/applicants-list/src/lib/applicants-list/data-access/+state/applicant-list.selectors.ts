import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicantState } from './applicant-list.reducers';

export const selectApplicantState =
  createFeatureSelector<ApplicantState>('applicant');

export const selectApplicants = createSelector(
  selectApplicantState,
  (state) => state.applicants
);

export const selectApplicantsLoading = createSelector(
  selectApplicantState,
  (state) => state.loading
);

export const selectApplicantsError = createSelector(
  selectApplicantState,
  (state) => state.error
);
