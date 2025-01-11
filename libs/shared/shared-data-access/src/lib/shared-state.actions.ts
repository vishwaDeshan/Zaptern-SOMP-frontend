import { createAction } from '@ngrx/store';

export const showBorderLine = createAction('[Navbar] Show Border Line');
export const hideBorderLine = createAction('[Navbar] Hide Border Line');

export const startFormSaving = createAction('[tool top bar] Start Form Saving');
export const FormSaved = createAction('[tool top bar] Form Saved');
export const FormSaveError = createAction('[tool top bar] Form Save Error');
