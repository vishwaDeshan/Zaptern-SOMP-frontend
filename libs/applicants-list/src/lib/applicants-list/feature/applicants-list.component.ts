import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {
  selectApplicants,
  selectApplicantsLoading,
} from '../data-access/+state/applicant-list.selectors';
import {
  hideSideBar,
  setPageTitle,
} from '@zaptern-somp-frontend/shared-data-access';
import { Store } from '@ngrx/store';
import { loadApplicants } from '../data-access/+state/applicants-list.actions';
import { ApplicantEffects } from '../data-access/+state/applicant-list.effects';

@Component({
  selector: 'lib-applicants-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applicants-list.component.html',
  styleUrl: './applicants-list.component.scss',
  providers: [ApplicantEffects],
})
export class ApplicantsListComponent implements OnInit {
  applicants$: Observable<any[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.applicants$ = this.store.select(selectApplicants);
    this.loading$ = this.store.select(selectApplicantsLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadApplicants());
    this.store.dispatch(hideSideBar());
    this.store.dispatch(setPageTitle({ pageTitle: 'Applicant List' }));
  }
}
