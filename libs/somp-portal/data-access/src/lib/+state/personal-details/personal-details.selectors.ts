import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { State, personalDetailsReducer } from './personal-details.reducer';

export const PersonalDetailsFeatureKey = 'personalDetails';

export const selectPersonalDetailsState = createFeatureSelector<State>(
  PersonalDetailsFeatureKey
);

export const selectPersonalDetails = createSelector(
    selectPersonalDetailsState,
    (state: State) => state.personalDetails
  );

export const selectLoading = createSelector(
  selectPersonalDetailsState,
  (state: State) => state.loading
);

export const selectError = createSelector(
  selectPersonalDetailsState,
  (state: State) => state.error
);

export const personalDetailsFeature = createFeature({
  name: PersonalDetailsFeatureKey,
  reducer: personalDetailsReducer,
});
