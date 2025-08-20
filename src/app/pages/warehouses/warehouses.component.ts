import { Component } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';

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
  constructor(public _service: WarehouseService ){}

  async data(){
    (await this._service.getAll()).subscribe((data: any) => {
      this.customers = data;
    });
  }

  ngOnInit(){
    this.data();
  }
}
