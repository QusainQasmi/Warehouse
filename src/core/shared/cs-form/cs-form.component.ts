import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-form',
  standalone: false,
  templateUrl: './cs-form.component.html',
  styleUrl: './cs-form.component.scss'
})

export class CsFormComponent {

  // @Input() elements: FromElement[] = [];
  
  private _elements: FromElement[] = [];
  @Input() model: any = {};
  @Input()
  set elements(value: FromElement[]) {
    this._elements = value;
  }

  get elements(): any[] {
    return this._elements;
  }

}

export interface FromElement {
  key: string;
  label: string;
  col: number;
  elemType: string;
  datasource?: any;
  valueField?: string;
  displayField?: string;
  service?: any;
  requiredIf?: (model: any) => boolean;
  disabledIf?: (model: any) => boolean;
  appearance?: string;
  methodName?: string;
  optionalDisplayField?: string;
}