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

export const SharedStateFeature = createFeature({
  name: SharedStateFeatureKey,
  reducer: sharedStateReducer,
});
