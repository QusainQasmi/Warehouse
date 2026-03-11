import { Injectable } from '@angular/core';
import { BaseService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService {

  constructor() {
    super("Locations");
  }

  async getAllData(){
    return await this.getAll("GetAllData");
  }

  async save(body: any){
    return await this.create("Add", body);
  }
}
