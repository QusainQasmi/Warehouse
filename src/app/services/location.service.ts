import { Injectable } from '@angular/core';
import { BaseService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService {

  constructor() {
    super("Locations");
  }

  // Update Delete

  async getAllData(){
    return await this.getAll("GetAllData");
  }

  async saveData(body: any, id?: any){
    return await this.save("Create", body, id);
  }
}
