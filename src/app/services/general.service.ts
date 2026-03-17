import { Injectable } from '@angular/core';
import { BaseService } from '../../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService extends BaseService {

  constructor() { 
        super("General");
  }

  async getCountries(){
    return await this.getAll("getCountries");
  }

  async getCities(countryName: string){
    const params = [
      { name: 'country', value: countryName }
    ];
    return await this.get("getCities", params);
  }
}
