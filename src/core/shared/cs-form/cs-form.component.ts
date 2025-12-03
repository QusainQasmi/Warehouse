import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-form',
    standalone: false,
  templateUrl: './cs-form.component.html',
  styleUrl: './cs-form.component.scss'
})

export class CsFormComponent {

  @Input() elements: FromElement[] = [];
  @Input() model: any = {};

}


export interface FromElement {
  key: string;
  label: string;
  col: number;
  elemType: string;
  datasource?: any;
  valueField?: string;
  displayField?: string;
  service?: string;
  requiredIf?: (model: any) => boolean;
  disabledIf?: (model: any) => boolean;
  appearance?: string;
}