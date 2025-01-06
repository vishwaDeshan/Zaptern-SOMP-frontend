import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './personal-details.reducer';

export const selectPersonalDetailsState =
  createFeatureSelector<State>('personalDetails');

export const selectPersonalDetailsById = (id: string) =>
  createSelector(
    selectPersonalDetailsState,
    (state: State) => state.personalDetails[id]
  );

export const selectLoading = createSelector(
  selectPersonalDetailsState,
  (state: State) => state.loading
);

export const selectError = createSelector(
  selectPersonalDetailsState,
  (state: State) => state.error
);
