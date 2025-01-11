import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { SideBarComponent } from '@zaptern-somp-frontend/components';
import {
  selectFormSavedSuccess,
  selectFormSaving,
} from '@zaptern-somp-frontend/shared-data-access';
import { ToolTopBarComponent } from 'libs/shared/components/top-tool-bar/top-tool-bar.component';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, ToolTopBarComponent, SideBarComponent, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Zaptern-SOMP-frontend';
  isSidebarVisible = true;
  isFormSaving$ = new Observable<boolean>();
  isFormSaveSuccess$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isFormSaving$ = this.store.select(selectFormSaving);
    this.isFormSaveSuccess$ = this.store.select(selectFormSavedSuccess);
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
