import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { sharedStateReducer, SharedState } from './shared-state.reducer';

const SharedStateFeatureKey = 'shared-state';

export const selectSharedState = createFeatureSelector<SharedState>(
  SharedStateFeatureKey
);

export const selectLineVisible = createSelector(
  selectSharedState,
  (state: SharedState) => state.lineVisible
);

export const selectFormSaving = createSelector(
  selectSharedState,
  (state: SharedState) => state.formSaving
);

export const selectFormSavedSuccess = createSelector(
  selectSharedState,
  (state: SharedState) => state.formSavedSuccess
);

export const selectFormSavedError = createSelector(
  selectSharedState,
  (state: SharedState) => state.formSavedError
);

export const SharedStateFeature = createFeature({
  name: SharedStateFeatureKey,
  reducer: sharedStateReducer,
});
