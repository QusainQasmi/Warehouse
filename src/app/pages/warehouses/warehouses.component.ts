import { Component } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';
import { CsGridColumn } from '../../../core/shared/cs-setup/cs-setup.component';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.scss',
  standalone: false,
})

export class WarehousesComponent {

  model: any = {};
  _data: any[] = [];
  columns: CsGridColumn[] = [
    { key: 'warehouseId', label: 'S.No', sticky: true, sortable: true},
    { key: 'name', label: 'Name', sticky: false, sortable: true},
    { key: 'address', label: 'Address', sticky: false, sortable: false},
    { key: 'city', label: 'City', sticky: false, sortable: false},
    { key: 'country', label: 'Country', sticky: false, sortable: false}
  ];
  
  constructor(public _service: WarehouseService ){
    this.data();
  }

  async data(){
    (await this._service.getAll()).subscribe((data: any) => {
      this._data = data;
    });
  }

  ngOnInit(){}
}
