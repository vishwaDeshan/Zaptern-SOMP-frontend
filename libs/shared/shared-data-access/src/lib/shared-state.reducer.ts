import { createReducer, on } from '@ngrx/store';
import { hideBorderLine, showBorderLine } from './shared-state.actions';

export interface SharedState {
  lineVisible: boolean;
}

export const initialState: SharedState = { lineVisible: false };

export const sharedStateReducer = createReducer(
  initialState,
  on(showBorderLine, (state) => ({ ...state, lineVisible: true })),
  on(hideBorderLine, (state) => ({ ...state, lineVisible: false }))
);
