import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private menuItems: Array<{ label: string; link: string; icon: string }> = [
    {
      label: 'Personal Information',
      link: '/personal-details',
      icon: 'personal-info.svg',
    },
    {
      label: 'Educational Background',
      link: '/educational-details',
      icon: 'education.svg',
    },
    {
      label: 'Professional Experience',
      link: '/experience-info',
      icon: 'experience.svg',
    },
    {
      label: 'Project Portfolio',
      link: '/project-details',
      icon: 'portfolio.svg',
    },
    { label: 'Health Records', link: '/health-info', icon: 'health.svg' },
    {
      label: 'Information Overview',
      link: '/info-summary',
      icon: 'overview.svg',
    },
  ];

  getMenuItems(): Array<{ label: string; link: string; icon: string }> {
    return this.menuItems;
  }

  setMenuItems(
    menuItems: Array<{ label: string; link: string; icon: string }>
  ): void {
    this.menuItems = menuItems;
  }
}
