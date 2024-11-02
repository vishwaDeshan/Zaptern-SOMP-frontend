import { StudentListState } from './student-list.reducers';

export const selectStudentList = (state: StudentListState) => state;

export const selectError = (state: StudentListState) => state.error;
