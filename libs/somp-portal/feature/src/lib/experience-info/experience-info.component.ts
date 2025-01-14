import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExperienceInfoFormComponent } from './experience-info-form/experience-info-form.component';
import { Store } from '@ngrx/store';
import {
  setPageTitle,
  showBorderLine,
  showSideBar,
  showTopToolBar,
} from '@zaptern-somp-frontend/shared-data-access';

@Component({
  selector: 'somp-experience-info',
  standalone: true,
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.scss'],
  imports: [CommonModule, ExperienceInfoFormComponent],
})
export class ExperienceInfoComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(showBorderLine());
    this.store.dispatch(showSideBar());
    this.store.dispatch(showTopToolBar());
    this.store.dispatch(setPageTitle({ pageTitle: 'Professional Experience' }));
  }
}
