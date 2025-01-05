import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from 'libs/shared/components/side-bar/libs/side-bar.component';
import { ToolTopBarComponent } from 'libs/shared/components/top-tool-bar/top-tool-bar.component';

@Component({
  standalone: true,
  imports: [RouterModule, SideBarComponent, ToolTopBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Zaptern-SOMP-frontend';
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
