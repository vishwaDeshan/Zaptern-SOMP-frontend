import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { ApplicantState, applicantReducer } from './applicant-list.reducers';

export const ApplicantFeatureKey = 'applicant';

export const selectApplicantState =
  createFeatureSelector<ApplicantState>(ApplicantFeatureKey);

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

export const applicantFeature = createFeature({
  name: ApplicantFeatureKey,
  reducer: applicantReducer,
});
