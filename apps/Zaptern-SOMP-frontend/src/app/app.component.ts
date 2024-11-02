import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StudentListComponent } from '@zaptern-somp-frontend/student-list';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, StudentListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Zaptern-SOMP-frontend';
}
