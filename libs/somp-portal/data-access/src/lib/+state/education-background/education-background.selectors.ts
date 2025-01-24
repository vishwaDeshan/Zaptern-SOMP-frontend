import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {
  EducationalDetailsState,
  educationalDetailsReducer,
} from './education-background.reducer';

export const EducationalDetailsFeatureKey = 'educationalDetails';

export const selectEducationalDetailsState =
  createFeatureSelector<EducationalDetailsState>(EducationalDetailsFeatureKey);

export const selectEducationalDetails = createSelector(
  selectEducationalDetailsState,
  (state: EducationalDetailsState) => state.educationalDetails
);

export const selectLoading = createSelector(
  selectEducationalDetailsState,
  (state: EducationalDetailsState) => state.loading
);

export const selectError = createSelector(
  selectEducationalDetailsState,
  (state: EducationalDetailsState) => state.error
);

export const educationalDetailsFeature = createFeature({
  name: EducationalDetailsFeatureKey,
  reducer: educationalDetailsReducer,
});
