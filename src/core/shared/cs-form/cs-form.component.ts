import { Component, Input } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { ElementType } from '../../../common.enums';

@Component({
  selector: 'cs-form',
  standalone: false,
  templateUrl: './cs-form.component.html',
  styleUrl: './cs-form.component.scss'
})

export class CsFormComponent {

  @Input() model: any = {};

  private _elements: FromElement[] = [];
  @Input() set elements(value: FromElement[]) {
    this._elements = value;
  }
  get elements(): any[] {
    return this._elements;
  }

  get ElementType(){
    return ElementType
  }

}

export interface FromElement {
  key: string;
  label: string;
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  elemType: ElementType;
  datasource?: any;
  valueField?: string;
  displayField?: string;
  service?: BaseService;
  requiredIf?: (model: any) => boolean;
  disabledIf?: (model: any) => boolean;
  appearance?: string;
  methodName?: string;
  optionalDisplayField?: string;
  hint?: string;
}