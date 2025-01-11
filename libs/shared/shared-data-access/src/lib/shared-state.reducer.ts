import { createReducer, on } from '@ngrx/store';
import {
  hideBorderLine,
  showBorderLine,
  startFormSaving,
  FormSaved,
} from './shared-state.actions';

export interface SharedState {
  lineVisible: boolean;
  formSaving: boolean;
  formSavedSuccess: boolean;
  formSavedError: boolean;
}

export const initialState: SharedState = {
  lineVisible: false,
  formSaving: false,
  formSavedSuccess: false,
  formSavedError: false,
};

export const sharedStateReducer = createReducer(
  initialState,
  on(showBorderLine, (state) => ({ ...state, lineVisible: true })),
  on(hideBorderLine, (state) => ({ ...state, lineVisible: false })),
  on(startFormSaving, (state) => ({ ...state, formSaving: true })),
  on(FormSaved, (state) => ({ ...state, formSavedSuccess: true })),
  on(FormSaved, (state) => ({ ...state, formSavedError: true }))
);
