import { Injectable } from '@angular/core';
import { BaseService } from '../../core/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService extends BaseService{

  constructor(http: HttpClient) {
    super(http);
    this.setController("Warehouse");
  }

  async getAll(){
    return this.getData("GetAllData");
  }
}
