import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StudentListState } from './student-list.reducers';

export const selectNavbarState =
  createFeatureSelector<StudentListState>('studentList');

export const selectStudentList = createSelector(
  selectNavbarState,
  (state: StudentListState) => state
);

export const selectError = createSelector(
  selectNavbarState,
  (state: StudentListState) => state.error
);
