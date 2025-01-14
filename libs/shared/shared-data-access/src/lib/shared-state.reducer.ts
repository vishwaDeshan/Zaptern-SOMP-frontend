import { createReducer, on } from '@ngrx/store';
import {
  hideBorderLine,
  showBorderLine,
  startFormSaving,
  FormSaved,
  FormSaveError,
  hideSideBar,
  showSideBar,
  hideTopToolBar,
  showTopToolBar,
} from './shared-state.actions';

export interface SharedState {
  lineVisible: boolean;
  sideBarVisible: boolean;
  toolTopBarVisible: boolean;
  formSaving: boolean;
  formSavedSuccess: boolean;
  formSavedError: boolean;
}

export const initialState: SharedState = {
  lineVisible: false,
  sideBarVisible: true,
  toolTopBarVisible: true,
  formSaving: false,
  formSavedSuccess: false,
  formSavedError: false,
};

export const sharedStateReducer = createReducer(
  initialState,
  on(showBorderLine, (state) => ({ ...state, lineVisible: true })),
  on(hideBorderLine, (state) => ({ ...state, lineVisible: false })),
  on(showSideBar, (state) => ({ ...state, sideBarVisible: true })),
  on(hideSideBar, (state) => ({ ...state, sideBarVisible: false })),
  on(showTopToolBar, (state) => ({ ...state, toolTopBarVisible: true })),
  on(hideTopToolBar, (state) => ({ ...state, toolTopBarVisible: false })),
  on(startFormSaving, (state) => ({ ...state, formSaving: true })),
  on(FormSaved, (state) => ({
    ...state,
    formSavedSuccess: true,
    formSaving: false,
  })),
  on(FormSaveError, (state) => ({
    ...state,
    formSavedError: true,
    formSavedSuccess: false,
    formSaving: false,
  }))
);
