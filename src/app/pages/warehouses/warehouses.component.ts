import { Component } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';
import { MatModules } from '../../../core/mat-modules';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.scss',
  standalone: true,
  imports: [MatModules]
})

export class WarehousesComponent {

  res: any;
  constructor(public _service: WarehouseService ){}

  async data(){
    (await this._service.getAll()).subscribe((data: any) => {
      this.res = data;
    });
  }

  ngOnInit(){
    this.data();
  }
}
