import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { navbarReducer, NavbarState } from './nav-bar.reducer';

const NavBarFeatureKey = 'navbar';

export const selectNavbarState =
  createFeatureSelector<NavbarState>(NavBarFeatureKey);

export const selectLineVisible = createSelector(
  selectNavbarState,
  (state: NavbarState) => state.lineVisible
);

export const navbarFeature = createFeature({
  name: NavBarFeatureKey,
  reducer: navbarReducer,
});
