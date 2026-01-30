import { Component } from '@angular/core';
import { CsGridColumn } from '../../../../../core/shared/cs-setup/cs-setup.component';
import { FromElement } from '../../../../../core/shared/cs-form/cs-form.component';
import { ElementType } from '../../../../../common.enums';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.scss',
  standalone: false,
})

export class WarehousesComponent {

  constructor(public _cityService: CityService) {
  }

  columns: CsGridColumn[] = [
    { key: 'warehouseId', label: 'S.No', sticky: true, sortable: true },
    { key: 'name', label: 'Name', sticky: false, sortable: true },
    { key: 'address', label: 'Address', sticky: false, sortable: false },
    { key: 'city', label: 'City', sticky: false, sortable: false },
    { key: 'country', label: 'Country', sticky: false, sortable: false }
  ];
  cityData: any[] = [];
  elements: FromElement[] = [];

  ngOnInit() {

    this.elements = [
      {
        col: 12,
        key: 'name',
        label: 'Name',
        elemType: ElementType.Input,
      },
      {
        col: 12,
        key: 'address',
        label: 'Address',
        elemType: ElementType.Input,
      },
      {
        col: 6,
        key: 'city',
        label: 'City',
        elemType: ElementType.Autocomplete,
        displayField: 'city',
        valueField: 'city',
        service: this._cityService,
        methodName: 'GetAllData',
        optionalDisplayField: 'country'
      },
      {
        col: 6,
        key: 'city1',
        label: 'City Select',
        elemType: ElementType.Select,
        displayField: 'name',
        valueField: 'name',
        service: this._cityService,
        methodName: 'GetAllData',
      },
      {
        col: 6,
        key: 'active',
        label: 'Active',
        elemType: ElementType.Checkbox,
      },
      {
        col: 3,
        key: 'active_Date',
        label: 'Active Date',
        elemType: ElementType.DatePicker,
      },
    ];
  }

  ngAfterViewInit() {

  }
}
