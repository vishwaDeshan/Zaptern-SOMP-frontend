import { createReducer, on } from '@ngrx/store';
import { PersonalDetails } from '@zaptern-somp-frontend/model';
import * as PersonalDetailsActions from './personal-details.actions';

export interface State {
  personalDetails: { [id: string]: PersonalDetails };
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  personalDetails: {},
  loading: false,
  error: null,
};

export const personalDetailsReducer = createReducer(
  initialState,
  on(PersonalDetailsActions.loadPersonalDetails, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    PersonalDetailsActions.loadPersonalDetailsSuccess,
    (state, { personalDetails }) => ({
      ...state,
      personalDetails: {
        ...state.personalDetails,
        [personalDetails.id]: personalDetails,
      },
      loading: false,
      error: null,
    })
  ),
  on(PersonalDetailsActions.loadPersonalDetailsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(
    PersonalDetailsActions.updatePersonalDetails,
    (state, { id, personalDetails }) => ({
      ...state,
      personalDetails: {
        ...state.personalDetails,
        [id]: personalDetails,
      },
    })
  )
);
