import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { applicantsListService } from '../api/applicants-list.service';
import { of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import {
  loadApplicants,
  loadApplicantsSuccess,
  loadApplicantsFailure,
} from './applicants-list.actions';

@Injectable()
export class ApplicantEffects {
  constructor(
    private actions$: Actions,
    private applicantsListService: applicantsListService
  ) {}

  loadApplicants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApplicants),
      exhaustMap(() => {
        if (this.applicantsListService) {
          return this.applicantsListService.GetApplicants().pipe(
            map((applicants) => loadApplicantsSuccess({ applicants })),
            catchError((error) => of(loadApplicantsFailure({ error })))
          );
        } else {
          return of(loadApplicantsFailure({ error: 'Service not available' }));
        }
      })
    )
  );
}
