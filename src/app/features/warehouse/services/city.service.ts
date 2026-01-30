import { Injectable } from '@angular/core';
import { BaseService } from '../../../../core/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService {

  constructor() {
    super("Warehouse");
  }
}  
