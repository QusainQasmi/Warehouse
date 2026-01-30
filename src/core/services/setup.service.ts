import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetupService extends BaseService {

  constructor() {
    super("");
  }

  setController(controllerName: string){
    this.setControllerName(controllerName);
  }
}
