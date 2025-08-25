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

  selectedCustomerId: number | null = null;
  customers: any[] = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Moin' }
  ];

  _data: any[] = [];
  recCount: number = 0;
  cols: CsGridColumn[] = [];
  
  constructor(public _service: WarehouseService ){}

  async data(){
    (await this._service.getAll()).subscribe((data: any) => {
      this._data = data;
      this.recCount = this._data?.length;
    });
  }

  ngOnInit(){
    this.cols = [
      // {
      //   displayName: 'Id',
      //   key: 'warehouseId',
      //   isPrimaryKey: true
      // },
      {
        displayName: 'S.No',
        key: 'warehouseId'
      },
      {
        displayName: 'Name',
        key: 'name'
      },
      {
        displayName: 'Address',
        key: 'address'
      },
      {
        displayName: 'City',
        key: 'city'
      },
      {
        displayName: 'Country',
        key: 'country'
      },
    ];
    this.data();
  }
}
