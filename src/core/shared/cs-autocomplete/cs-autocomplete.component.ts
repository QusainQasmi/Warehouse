import { Component, Input, OnInit, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ApiResponse } from '../../ApiResponse';

@Component({
  selector: 'cs-autocomplete',
  standalone: false,
  templateUrl: './cs-autocomplete.component.html',
  styleUrl: './cs-autocomplete.component.scss',
})
export class CsAutocompleteComponent implements OnInit {
  
  @Input() label: any = 'label';
  @Input() valueField: any = 'value';
  @Input() displayField: any = 'name';
  @Input() type: any = 'text';
  @Input() csModel: any;
  @Input() service: any;
  @Input() methodName: any = "GetAllData";
  @Input() optionalDisplayField: any;
  @Input() appearance: 'outline' | 'fill' = 'outline';

  displayValue: any;
  onChange = (value: any) => { };
  onTouched = () => { };

  private _datasource: any[] = [];

  @Input()
  set datasource(value: any[]) {
    this._datasource = value;
  }

  get datasource(): any[] {
    return this._datasource;
  }

  selectOption(_value: any) {
    const _selectObj = this.datasource.find(x => x[this.valueField] === _value);
    if (_selectObj) {
      this.csModel = _selectObj[this.valueField];
      this.displayValue = _selectObj[this.displayField];
    }
  }

  async checkServiceData() {
    if (this.service)
      this.datasource = await this.getServiceData();
    else
      this.datasource = [...this.datasource];
  }

  async getServiceData() {
    const res: ApiResponse<any> = await this.service[this.methodName]();
    if (!res.IsSuccess || !res.Data || res.Data?.length === 0) return;
    return res.Data;
  }

  ngOnInit() {
    // this.checkServiceData();
  }

}
