import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private menuItems: Array<{ label: string; link: string }> = [
    { label: 'Personal Information', link: '/personal-details' },
    { label: 'Educational Background', link: '/educational-details' },
    { label: 'Professional Experience', link: '/experience-info' },
    { label: 'Project Portfolio', link: '/project-details' },
    { label: 'Health Records', link: '/health-info' },
    { label: 'Comprehensive Information Overview', link: '/info-summary' },
  ];

  getMenuItems(): Array<{ label: string; link: string }> {
    return this.menuItems;
  }

  // for future works
  setMenuItems(menuItems: Array<{ label: string; link: string }>): void {
    this.menuItems = menuItems;
  }
}
