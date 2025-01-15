import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfoSummaryFormComponent } from './info-summary-form/info-summary-form.component';
import { select, Store } from '@ngrx/store';
import {
  setPageTitle,
  showBorderLine,
  showSideBar,
  showTopToolBar,
} from '@zaptern-somp-frontend/shared-data-access';
import { Observable } from 'rxjs';
import { PersonalDetails } from '@zaptern-somp-frontend/model';
import {
  loadPersonalDetails,
  selectPersonalDetails,
} from '@zaptern-somp-frontend/data-access';

@Component({
  selector: 'somp-info-summary',
  standalone: true,
  templateUrl: './info-summary.component.html',
  styleUrls: ['./info-summary.component.scss'],
  imports: [CommonModule, InfoSummaryFormComponent],
})
export class InfoSummaryComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(showBorderLine());
    this.store.dispatch(showSideBar());
    this.store.dispatch(showTopToolBar());
    this.store.dispatch(setPageTitle({ pageTitle: 'Information Overview' }));
  }
}
