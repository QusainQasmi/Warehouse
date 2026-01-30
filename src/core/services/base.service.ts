import { HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environment';
import { ApiResponse } from '../ApiResponse';
import { HttpHelper } from '../httpHelper';

export abstract class BaseService {

  protected baseUrl = environment.productionUrl;
  protected controllerName: string = "";

  constructor(protected controller: string) {
    if (controller)
      this.controllerName = controller;
  }

  protected buildUrl(action?: string) {
    return action ? `${this.baseUrl}${this.controllerName}/${action}`
      : `${this.baseUrl}${this.controllerName}`;
  }

  protected buildParams(params?: { name: string; value: any }[]) {
    let httpParams = new HttpParams();
    params?.forEach(p => {
      if (p.value !== undefined && p.value !== null) {
        httpParams = httpParams.append(p.name, p.value);
      }
    });
    return httpParams;
  }

  protected async get<T>(action?: string, params?: any[]){
    try {
      const res: ApiResponse<T> = await lastValueFrom(
        HttpHelper.get(this.buildUrl(action), this.buildParams(params))
      );
      return { IsSuccess: true, Data: res, Message: "Success" };
    } catch (err: any) {
      console.error('HTTP Error:', err);
      return { IsSuccess: false, Data: null, Errors: err || 'Network Error' };
    }
  }

  protected async post<T>(action: string, body: any) {
    try {
      const res: any = await lastValueFrom(
        HttpHelper.post(this.buildUrl(action), body)
      );
      return { IsSuccess: true, Data: res, Message: "Success" };
    } catch (err: any) {
      console.error('HTTP POST Error:', err);
      return { success: false, data: null, Errors: err || 'Network Error' };
    }
  }

  protected async put<T>(action: string, body: any) {
    try {
      const res: any = await lastValueFrom(
        HttpHelper.put(this.buildUrl(action), body)
      );
      return { IsSuccess: true, Data: res, Message: "Success" };
    } catch (err: any) {
      console.error('HTTP PUT Error:', err);
      return { success: false, data: null, Errors: err || 'Network Error' };
    }
  }

  protected async delete<T>(action: string) {
    try {
      const res: any = await lastValueFrom(
        HttpHelper.delete(this.buildUrl(action))
      );
      return { IsSuccess: true, Data: res, Message: "Success" };
    } catch (err: any) {
      console.error('HTTP DELETE Error:', err);
      return { success: false, data: null, Errors: err || 'Network Error' };
    }
  }

  async getAll<T>(actionName: string, params?: any[]) {
    return await this.get<T>(actionName, params);
  }

  async getById<T>(actionName: string, id: number) {
    return await this.get<T>(actionName + '/' + id.toString());
  }

  async create<T>(actionName: string, body: any) {
    return await this.post<T>(actionName, body);
  }

  async update<T>(actionName: string, id?: number, body?: any){
    if (id)
      return await this.put<T>(actionName + '/' + id.toString(), body);
    else
      return await this.put<T>(actionName, body);
  }

  async remove<T>(actionName: string, id: number) {
    return await this.delete<T>(actionName + '/' + id.toString());
  }

  protected setControllerName(name: string) {
    if (name)
      this.controllerName = name;
  }
}
