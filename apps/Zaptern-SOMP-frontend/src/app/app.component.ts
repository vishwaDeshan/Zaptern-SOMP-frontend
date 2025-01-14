import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  SideBarComponent,
  NotificationsComponent,
} from '@zaptern-somp-frontend/components';
import {
  selectFormSavedSuccess,
  selectFormSaving,
  selectLineVisible,
} from '@zaptern-somp-frontend/shared-data-access';
import { ToolTopBarComponent } from '@zaptern-somp-frontend/components';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ToolTopBarComponent,
    SideBarComponent,
    NotificationsComponent,
    CommonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Zaptern-SOMP-frontend';
  isSidebarVisible = true;
  isFormSaving$ = new Observable<boolean>();
  isFormSaveSuccess$ = new Observable<boolean>();
  isShowSideBarLines$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isFormSaving$ = this.store.select(selectFormSaving);
    this.isFormSaveSuccess$ = this.store.select(selectFormSavedSuccess);
    this.isShowSideBarLines$ =  this.store.select(selectLineVisible);
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
