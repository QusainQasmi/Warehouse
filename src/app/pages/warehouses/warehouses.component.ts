import { Component } from '@angular/core';
import { CsGridColumn } from '../../../core/shared/cs-setup/cs-setup.component';
import { FromElement } from '../../../core/shared/cs-form/cs-form.component';
import { ElementType } from '../../../common.enums';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.scss',
  standalone: false,
})

export class WarehousesComponent {

  constructor(public _cityService: CityService) {
    this._cityService.setControllerName("City");
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

  async getCountryData() {
    const res = await this._cityService.getData("GetAllData");
    if (!res.IsSuccess || !res.Data) return;
    this.cityData = Array.isArray(res.Data) && res.Data?.length > 0 ? [...res.Data] : [];
  }

  ngOnInit() {
    this.getCountryData();

    setTimeout(() => {
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
          displayField: 'cityName',
          valueField: 'cityName',
          datasource: this.cityData,
          optionalDisplayField: 'countryName'
        },
        {
          col: 6,
          key: 'country',
          label: 'Country',
          elemType: ElementType.Autocomplete,
          displayField: 'countryName',
          valueField: 'countryName',
          datasource: this.cityData,
        },
      ];
    }, 1000)
  }

  ngAfterViewInit() {

  }
}
