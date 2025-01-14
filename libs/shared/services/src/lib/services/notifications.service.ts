import { Injectable } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { signal } from '@angular/core';

export interface Notification {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notifications = signal<Notification[]>([]);

  showSuccess(message: string) {
    this.showNotification('success', message);
  }

  showError(message: string) {
    this.showNotification('error', message);
  }

  showWarning(message: string) {
    this.showNotification('warning', message);
  }

  showInfo(message: string) {
    this.showNotification('info', message);
  }

  private showNotification(
    type: 'success' | 'error' | 'warning' | 'info',
    message: string
  ) {
    this.notifications.update(() => [{ type, message }]);
  }
}
