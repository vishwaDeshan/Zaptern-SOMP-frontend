import { createReducer, on } from '@ngrx/store';
import {
  studentListActions,
  studentListActionsSuccess,
  studentListActionsFailure,
} from './student-list.action';

export interface StudentListState {
  studentId: string;
  studentfirstName: string;
  studentLastName: string;
  feild: string;
  position: string;
  error: string;
}

const initialState: StudentListState = {
  studentId: '',
  studentfirstName: '',
  studentLastName: '',
  feild: '',
  position: '',
  error: '',
};

export const studentListRedcer = createReducer(
  initialState,
  on(studentListActions, (state) => {
    return {
      ...state,
    };
  }),
  on(studentListActionsSuccess, (state, action) => {
    return {
      ...state,
      studentId: action.studentList.studentId,
      studentfirstName: action.studentList.studentfirstName,
      studentLastName: action.studentList.studentLastName,
      feild: action.studentList.feild,
      position: action.studentList.position,
    };
  }),
  on(studentListActionsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
