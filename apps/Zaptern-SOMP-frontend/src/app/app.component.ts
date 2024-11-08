import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StudentListComponent } from '@zaptern-somp-frontend/student-list';
import { SideBarComponent } from 'libs/shared/components/side-bar/side-bar.component';
import { ToolTopBarComponent } from 'libs/shared/components/top-tool-bar/top-tool-bar.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    StudentListComponent,
    SideBarComponent,
    ToolTopBarComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Zaptern-SOMP-frontend';
}
