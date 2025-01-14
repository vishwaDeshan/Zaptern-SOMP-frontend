import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectDetailsFormComponent } from './project-details-form/project-details-form.component'; // Import the form component
import { Store } from '@ngrx/store';
import {
  setPageTitle,
  showBorderLine,
  showSideBar,
  showTopToolBar,
} from '@zaptern-somp-frontend/shared-data-access';

@Component({
  selector: 'somp-project-details',
  standalone: true,
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  imports: [CommonModule, ProjectDetailsFormComponent],
})
export class ProjectDetailsComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(showBorderLine());
    this.store.dispatch(showSideBar());
    this.store.dispatch(showTopToolBar());
    this.store.dispatch(setPageTitle({ pageTitle: 'Project Portfolio' }));
  }
}
