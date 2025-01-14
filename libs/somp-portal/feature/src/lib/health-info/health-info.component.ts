import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HealthInfoFormComponent } from './health-info-form/health-info-form.component';
import { Store } from '@ngrx/store';
import {
  setPageTitle,
  showBorderLine,
  showSideBar,
  showTopToolBar,
} from '@zaptern-somp-frontend/shared-data-access';

@Component({
  selector: 'somp-health-info',
  standalone: true,
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.scss'],
  imports: [CommonModule, HealthInfoFormComponent],
})
export class HealthInfoComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(showBorderLine());
    this.store.dispatch(showSideBar());
    this.store.dispatch(showTopToolBar());
    this.store.dispatch(setPageTitle({ pageTitle: 'Health Records' }));
  }
}
