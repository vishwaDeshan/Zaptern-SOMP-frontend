import { Injectable } from '@angular/core';
import { LoadingPopupComponent } from '../../../../components/src/lib/loading-popup/loading-popup.component';
import {
  NgbModal,
  NgbModalOptions,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class LoadingPopupService {
  private loadingDialogRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  openLoadingDialog(config?: NgbModalOptions) {
    if (this.loadingDialogRef) {
      this.loadingDialogRef.close();
    }

    this.loadingDialogRef = this.modalService.open(LoadingPopupComponent, {
      size: 'sm',
      centered: true,
      backdrop: 'static',
      keyboard: false,
      ...config,
    });
  }

  closeLoadingDialog() {
    if (this.loadingDialogRef) {
      this.loadingDialogRef.close();
      this.loadingDialogRef = undefined;
    }
  }
}
