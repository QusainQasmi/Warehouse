import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // protected http = inject(HttpClient);
  protected baseUrl = environment.apiUrl;
  protected controllerName?: string;

  constructor(protected http: HttpClient) {}

  protected setController(_controllerName: string) {
    this.controllerName = _controllerName;
  }

  async getData<T>(methodName: string) {
    return await this.http.get<T>(`${this.baseUrl}${this.controllerName}/${methodName}`);
  }  

  async get<T>(methodName: string, params?: any) {
    return await this.http.get<T>(`${this.baseUrl}${this.controllerName}/${methodName}`, { params });
  }

  async getById<T>(methodName: string, id: any){
    return await this.http.get<T>(`${this.baseUrl}${this.controllerName}/${methodName}/${id}`);
  }

  async post<T>(methodName: string, body: any) {
    return await this.http.post<T>(`${this.baseUrl}${this.controllerName}/${methodName}`, body);
  }

  async put<T>(methodName: string, body: any) {
    return await this.http.put<T>(`${this.baseUrl}${this.controllerName}/${methodName}`, body);
  }

  async delete<T>(methodName: string, id: number) {
    return await this.http.delete<T>(`${this.baseUrl}${this.controllerName}/${methodName}/${id}`);
  }
}
