import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { PersonalDetailsService } from '../../api-services/personal-details.service';
import { LoadingPopupService } from '@zaptern-somp-frontend/services';
import * as PersonalDetailsActions from './personal-details.actions';
import * as SharedStateActions from '@zaptern-somp-frontend/shared-data-access';
import { of } from 'rxjs';

@Injectable()
export class PersonalDetailsEffects {
  constructor(
    private actions$: Actions,
    private personalDetailsService: PersonalDetailsService,
    private loadingPopupService: LoadingPopupService
  ) {}

  loadPersonalDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonalDetailsActions.loadPersonalDetails),
      switchMap(({ id }) => {
        this.loadingPopupService.openLoadingDialog();
        return this.personalDetailsService.getPersonalDetails(id).pipe(
          map((personalDetails) =>
            PersonalDetailsActions.loadPersonalDetailsSuccess({
              personalDetails,
            })
          ),
          catchError((error) =>
            of(PersonalDetailsActions.loadPersonalDetailsFailure({ error }))
          ),
          finalize(() => {
            this.loadingPopupService.closeLoadingDialog();
          })
        );
      })
    )
  );

  updatePersonalDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonalDetailsActions.updatePersonalDetails),
      switchMap(({ personalDetails }) => {
        return this.personalDetailsService
          .updatePersonalDetails(personalDetails)
          .pipe(
            map(() =>
              PersonalDetailsActions.updatePersonalDetailsSuccess({
                personalDetails,
              })
            ),
            catchError((error) =>
              of(PersonalDetailsActions.updatePersonalDetailsFailure({ error }))
            )
          );
      })
    )
  );

  onFormSaveStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PersonalDetailsActions.updatePersonalDetails),
      map(() => SharedStateActions.startFormSaving())
    );
  });

  onFormSaveSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PersonalDetailsActions.updatePersonalDetailsSuccess),
      map(() => SharedStateActions.FormSaved())
    );
  });

  onFormSaveError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PersonalDetailsActions.updatePersonalDetailsFailure),
      map(() => SharedStateActions.FormSaveError())
    );
  });
}
