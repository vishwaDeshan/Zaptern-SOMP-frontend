import { Injectable } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

export interface Notification {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notificationsSubject = new Subject<Notification>();
  notifications$ = this.notificationsSubject.asObservable();

  constructor(private alertConfig: NgbAlertConfig) {}

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
    this.notificationsSubject.next({ type, message });
  }
}
