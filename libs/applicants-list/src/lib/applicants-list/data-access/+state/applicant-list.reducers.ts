import { createReducer, on } from '@ngrx/store';
import {
  loadApplicantsSuccess,
  loadApplicantsFailure,
} from './applicants-list.actions';
import { Applicant } from '../../models/applicant.model';

export interface ApplicantState {
  applicants: Applicant[];
  error: string | null;
  loading: boolean;
}


export const initialState: ApplicantState = {
  applicants: [],
  error: null,
  loading: false,
};

export const applicantReducer = createReducer(
  initialState,
  on(loadApplicantsSuccess, (state, { applicants }) => ({
    ...state,
    applicants,
    loading: false, 
  })),
  on(loadApplicantsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
