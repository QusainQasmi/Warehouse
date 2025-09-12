import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'cs-autocomplete',
  standalone: false,
  templateUrl: './cs-autocomplete.component.html',
  styleUrl: './cs-autocomplete.component.scss',
})
export class CsAutocompleteComponent {
  @Input() options: any[] = [];
  @Input() label: string = 'label';
  @Input() valueField: any = 'value';
  @Input() displayField: string = 'name';
  @Input() type: string = 'text';
  @Input() csModel: any;
  @Input() appearance: 'outline' | 'fill' = 'outline';

  displayValue: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  get datasource(): any[] {
    return this.options;
  }
  set datasource(data: any[]) {
    this.datasource = data;
  }

  selectOption(_value: any) {
    const _selectObj = this.datasource.find(x => x[this.valueField] === _value);
    if(_selectObj){
      this.csModel = _selectObj[this.valueField];
      this.displayValue = _selectObj[this.displayField];
    }
  }

}
