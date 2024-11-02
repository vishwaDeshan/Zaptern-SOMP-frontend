import { createAction } from '@ngrx/store';

export const studentListActions = createAction(
  '[Student List] get student list'
);

export const studentListActionsSuccess = createAction(
  '[Student List] get student list success',
  (studentList: any) => ({ studentList })
);

export const studentListActionsFailure = createAction(
  '[Student List] get student list failure',
  (error: any) => ({ error })
);
 