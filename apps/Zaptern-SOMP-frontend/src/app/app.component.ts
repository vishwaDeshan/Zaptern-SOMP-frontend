import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StudentListComponent } from '@zaptern-somp-frontend/student-list';
import { SideBarComponent } from 'libs/shared/components/side-bar/side-bar.component';
import { NavBarComponent } from 'libs/shared/components/main-nav/main-nav.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    StudentListComponent,
    SideBarComponent,
    NavBarComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Zaptern-SOMP-frontend';
}
