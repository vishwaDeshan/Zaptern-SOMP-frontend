import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { EducationalDetailsService } from '../../api-services/education-background.service';
import { LoadingPopupService } from '@zaptern-somp-frontend/services';
import * as EducationalDetailsActions from './education-background.actions';
import * as SharedStateActions from '@zaptern-somp-frontend/shared-data-access';
import { NotificationsService } from '@zaptern-somp-frontend/services';
import { of } from 'rxjs';

@Injectable()
export class EducationalDetailsEffects {
  constructor(
    private actions$: Actions,
    private educationalDetailsService: EducationalDetailsService,
    private loadingPopupService: LoadingPopupService,
    private notificationsService: NotificationsService
  ) {}

  loadEducationalDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EducationalDetailsActions.loadEducationalDetails),
      switchMap(({ applicantId }) => {
        this.loadingPopupService.openLoadingDialog();
        return this.educationalDetailsService
          .getEducationalDetails(applicantId)
          .pipe(
            map((educationalDetails) =>
              EducationalDetailsActions.loadEducationalDetailsSucess({
                educationalDetails,
              })
            ),
            catchError((error) => {
              this.notificationsService.showError(
                'Failed to load educational details.'
              );
              return of(
                EducationalDetailsActions.loadEducationalDetailsFailure({
                  error,
                })
              );
            }),
            finalize(() => {
              this.loadingPopupService.closeLoadingDialog();
            })
          );
      })
    )
  );

  updateEducationalDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EducationalDetailsActions.saveEducationalDetails),
      switchMap(({ educationalDetails }) => {
        return this.educationalDetailsService
          .saveEducationalDetails(educationalDetails)
          .pipe(
            map(() =>
              EducationalDetailsActions.saveEducationalDetailsSucess({
                educationalDetails,
              })
            ),
            catchError((error) => {
              this.notificationsService.showError(
                'Failed to save eductional details.'
              );
              return of(
                EducationalDetailsActions.saveEducationalDetailsFailure({
                  error,
                })
              );
            })
          );
      })
    )
  );

  onFormSaveStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EducationalDetailsActions.saveEducationalDetails),
      map(() => SharedStateActions.startFormSaving())
    );
  });

  onFormSaveSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EducationalDetailsActions.saveEducationalDetailsSucess),
      map(() => SharedStateActions.FormSaved())
    );
  });

  onFormSaveError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EducationalDetailsActions.saveEducationalDetailsFailure),
      map(() => SharedStateActions.FormSaveError())
    );
  });
}
