import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cs-dialog',
  standalone: false,
  templateUrl: './cs-dialog.component.html',
  styleUrl: './cs-dialog.component.scss'
})

export class CsDialogComponent {

  constructor( private dialogRef: MatDialogRef<CsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: CsDialogData ) {}

  getKeys(obj: any) {
    return obj ? Object.keys(obj) : [];
  }

  buttonClick(btn: any) {
    if(btn.action){
      btn.action(this.data.formData);
    }
    this.dialogRef.close(this.data.formData);
  }
}


export interface CsDialogData {
  title?: string;
  content?: any;
  buttons?: {
    text: string;
    color?: 'primary' | 'warn' | 'accent';
    action?: any;
  }[];
  formData?: any;
  component?: any;
  width?: string;
}