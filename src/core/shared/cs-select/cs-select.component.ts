import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-select',
  standalone: false,
  templateUrl: './cs-select.component.html',
  styleUrl: './cs-select.component.scss'
})

export class CsSelectComponent {
  @Input() valueField: string = "id";
  @Input() displayField: string = "name";
  @Input() label: string = "";
  @Input() appearance: 'outline' | 'fill' = 'outline';
  @Input() methodName: any = "GetAllData";

  private _service: any;
  @Input() set service(value: any) {
    this._service = value;
  }
  get service() {
    return this._service;
  }

  private _csModel: any;
  @Input() set csModel(value: any) {
    this._csModel = value;
  }
  get csModel() {
    return this._csModel;
  }

  private _datasource: any[] = [];
  @Input() set datasource(value: any[]) {
    this._datasource = value;
  }
  get datasource(): any[] {
    return this._datasource;
  }

  constructor() {

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