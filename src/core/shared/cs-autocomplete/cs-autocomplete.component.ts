import { Component, Input, OnInit, TemplateRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ApiResponse } from '../../ApiResponse';
import { BaseService } from '../../services/base.service';

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
  // @Input() csModel: any;
  // @Input() service: BaseService | any;
  @Input() controllerName: string = "";
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

  private _service: any;

  @Input()
  set service(value: any) {
    this._service = value;
  }

  get service() {
    return this._service;
  }

  private _csModel: any;

  @Input()
  set csModel(value: any) {
    this._csModel = value;
  }

  get csModel() {
    return this._csModel;
  }

  constructor() {
  }

  selectOption(_value: any) {
    const _selectObj = this.datasource.find(x => x[this.valueField] === _value);
    if (_selectObj) {
      this.csModel = _selectObj[this.valueField];
      this.displayValue = _selectObj[this.displayField];
    }
  }

  async checkServiceData() {
    const res = await this.service.getAll(this.methodName);
    if (!res.IsSuccess || !res.Data) {
      this.datasource = [];
      return;
    }
    this.datasource = Array.isArray(res.Data) ? res.Data : [];
  }

  ngOnInit() {
    if (this.service) {
      this.checkServiceData();
    } else {
      this.datasource = this._datasource;
    }
  }

}
