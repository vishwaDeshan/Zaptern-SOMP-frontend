import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { PersonalDetailsService } from '../../api-services/personal-details.service';
import * as PersonalDetailsActions from './personal-details.actions';
import { of } from 'rxjs';

@Injectable()
export class PersonalDetailsEffects {
  constructor(
    private actions$: Actions,
    private personalDetailsService: PersonalDetailsService,
    private store: Store
  ) {}

  loadPersonalDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonalDetailsActions.loadPersonalDetails),
      switchMap(({ id }) => {
        return this.personalDetailsService.getPersonalDetails(id).pipe(
          map((personalDetails) =>
            PersonalDetailsActions.loadPersonalDetailsSuccess({
              personalDetails,
            })
          ),
          catchError((error) =>
            of(PersonalDetailsActions.loadPersonalDetailsFailure({ error }))
          )
        );
      })
    )
  );

  updatePersonalDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonalDetailsActions.updatePersonalDetails),
      switchMap(({ id, personalDetails }) => {
        return this.personalDetailsService
          .updatePersonalDetails(id, personalDetails)
          .pipe(
            map(() =>
              PersonalDetailsActions.loadPersonalDetailsSuccess({
                personalDetails,
              })
            ),
            catchError((error) =>
              of(PersonalDetailsActions.loadPersonalDetailsFailure({ error }))
            )
          );
      })
    )
  );
}
