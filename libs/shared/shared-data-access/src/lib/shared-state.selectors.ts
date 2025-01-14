import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { sharedStateReducer, SharedState } from './shared-state.reducer';
import { state } from '@angular/animations';

const SharedStateFeatureKey = 'shared-state';

export const selectSharedState = createFeatureSelector<SharedState>(
  SharedStateFeatureKey
);

export const selectLineVisible = createSelector(
  selectSharedState,
  (state: SharedState) => state.lineVisible
);

export const selectSidebarVisible = createSelector(
  selectSharedState,
  (state: SharedState) => state.sideBarVisible
);

export const selectTopToolbarVisible = createSelector(
  selectSharedState,
  (state: SharedState) => state.toolTopBarVisible
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

export const selectPageTitle = createSelector(
  selectSharedState,
  (state: SharedState) => state.pageTitle
);

export const SharedStateFeature = createFeature({
  name: SharedStateFeatureKey,
  reducer: sharedStateReducer,
});
