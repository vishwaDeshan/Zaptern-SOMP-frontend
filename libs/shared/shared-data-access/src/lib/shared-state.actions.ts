import { createAction, props } from '@ngrx/store';

export const showBorderLine = createAction('[sidebar] Show Border Line');
export const hideBorderLine = createAction('[sidebar] Hide Border Line');
export const hideSideBar = createAction('[sidebar] Hide Sidebar');
export const showSideBar = createAction('[sidebar] Show Sidebar');

export const startFormSaving = createAction('[tool top bar] Start Form Saving');
export const FormSaved = createAction('[tool top bar] Form Saved');
export const FormSaveError = createAction('[tool top bar] Form Save Error');
export const hideTopToolBar = createAction('[tool top bar] Hide Tool top bar');
export const showTopToolBar = createAction('[tool top bar] Show Tool top bar');
export const setPageTitle = createAction(
  '[tool top bar] show page title',
  props<{ pageTitle: string }>()
);
