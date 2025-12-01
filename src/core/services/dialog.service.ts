import { Injectable, TemplateRef, Type, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CsDialogData } from '../shared/cs-dialog/cs-dialog.component';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  private dialog = inject(MatDialog);
  
  open<T>(content: Type<T> | TemplateRef<T>, data?: CsDialogData, config?: MatDialogConfig, width?: string) {
    const dialogConfig: MatDialogConfig = {
      width: width || "60vw",
      disableClose: true,
      autoFocus: true,
      data: data || {},
      ...config
    };

    const dialogRef = this.dialog.open(content, dialogConfig);
    return dialogRef;
  }

  closeAll() {
    this.dialog.closeAll();
  }
}
