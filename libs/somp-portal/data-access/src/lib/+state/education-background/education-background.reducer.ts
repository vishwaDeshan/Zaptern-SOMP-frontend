import { createReducer, on } from '@ngrx/store';
import { EducationBackgroundData } from '@zaptern-somp-frontend/model';
import * as EducationalDetailsActions from './education-background.actions';

export interface EducationalDetailsState {
  educationalDetails: EducationBackgroundData;
  loading: boolean;
  error: string | null;
}

export const initialState: EducationalDetailsState = {
  educationalDetails: {
    institueName: '',
    startDate: '',
    endDate: '',
    description: '',
    isDoing: false,
  },
  loading: false,
  error: null,
};

export const educationalDetailsReducer = createReducer(
  initialState,
  on(EducationalDetailsActions.loadEducationalDetails, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    EducationalDetailsActions.loadEducationalDetailsSucess,
    (state, { educationalDetails }) => ({
      ...state,
      educationalDetails: educationalDetails,
      loading: false,
      error: null,
    })
  ),
  on(
    EducationalDetailsActions.loadEducationalDetailsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(
    EducationalDetailsActions.saveEducationalDetails,
    (state, { educationalDetails }) => ({
      ...state,
      educationalDetails: {
        ...state.educationalDetails,
        ...educationalDetails,
      },
    })
  ),
  on(
    EducationalDetailsActions.saveEducationalDetailsSucess,
    (state, { educationalDetails }) => ({
      ...state,
      educationalDetails: educationalDetails,
      loading: false,
      error: null,
    })
  ),
  on(
    EducationalDetailsActions.saveEducationalDetailsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);
