import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'somp-Side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [CommonModule],
})
export class SideBarComponent {
  title = 'Main Side Bar';
}
