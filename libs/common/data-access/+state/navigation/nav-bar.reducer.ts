import { createReducer, on } from '@ngrx/store';
import { hideBorderLine, showBorderLine } from './nav-bar.actions';

export interface NavbarState {
  lineVisible: boolean;
}

export const initialState: NavbarState = { lineVisible: false };

export const navbarReducer = createReducer(
  initialState,
  on(showBorderLine, (state) => ({ ...state, lineVisible: true })),
  on(hideBorderLine, (state) => ({ ...state, lineVisible: false }))
);
