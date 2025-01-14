import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EducationalBackgroundFormComponent } from './educational-background-form/educational-background-form.component';
import { Store } from '@ngrx/store';
import {
  setPageTitle,
  showBorderLine,
  showSideBar,
  showTopToolBar,
} from '@zaptern-somp-frontend/shared-data-access';

@Component({
  selector: 'somp-educational-background',
  standalone: true,
  templateUrl: './educational-background.component.html',
  styleUrls: ['./educational-background.component.scss'],
  imports: [CommonModule, EducationalBackgroundFormComponent],
})
export class EducationalBackgroundComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(showBorderLine());
    this.store.dispatch(showSideBar());
    this.store.dispatch(showTopToolBar());
    this.store.dispatch(setPageTitle({ pageTitle: 'Educational Background' }));
  }
}
