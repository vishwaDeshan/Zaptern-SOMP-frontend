import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavService } from '@zaptern-somp-frontend/services';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'somp-Side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class SideBarComponent {
  title = 'Main Side Bar';
  logoImage = 'assets/Zaptern.png';
  menuItems: Array<{ label: string; link: string }> = [];

  constructor(private navService: NavService, private router: Router) {}

  ngOnInit(): void {
    this.menuItems = this.navService.getMenuItems();
  }
}
