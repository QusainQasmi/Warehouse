import { Injectable } from '@angular/core';
import { BaseService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService {

  constructor() {
    super("Locations");
  }
}
