import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NotificationsService,
  Notification,
} from '@zaptern-somp-frontend/services';

@Component({
  selector: 'somp-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe((notification) => {
      this.notifications.push(notification);
      setTimeout(() => {
        this.notifications.shift();
      }, 5000);
    });
  }
}
