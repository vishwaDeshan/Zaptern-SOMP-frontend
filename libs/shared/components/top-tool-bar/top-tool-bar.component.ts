import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'somp-tool-top-bar',
  standalone: true,
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.scss'],
  imports: [CommonModule],
})
export class ToolTopBarComponent {
  title = 'Main Nav Bar';
}
