import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FromElement } from '../cs-form/cs-form.component';

@Component({
  selector: 'cs-dialog',
  standalone: false,
  templateUrl: './cs-dialog.component.html',
  styleUrl: './cs-dialog.component.scss'
})

export class CsDialogComponent {

  constructor( public dialogRef: MatDialogRef<CsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: CsDialogData ) {}

  buttonClick(btn: any) {
    if(btn.action) return btn.action({model: this.data.model, ref: this.dialogRef});
  
    this.dialogRef.close(this.data.model);
  }

  onSave(){
    
  }
}

export interface CsDialogData {
  title?: string;
  content?: any;
  model?: any;
  elements?: FromElement[];
  component?: any;
  width?: string;
  buttons?: {
    text: string;
    color?: 'primary' | 'warn' | 'accent';
    action?: any;
  }[];
}