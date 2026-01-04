import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { catchError, map } from 'rxjs/operators';
import { firstValueFrom, Observable, of } from 'rxjs';
import { ApiResponse } from '../ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // protected http = inject(HttpClient);
  protected baseUrl = environment.productionUrl;
  protected controllerName?: string;

  constructor(protected http: HttpClient) {}

  protected setController(_controllerName: string) {
    this.controllerName = _controllerName;
  }

  async getData<T>(methodName: string): Promise<ApiResponse<T>> {
    try {
      const response = await firstValueFrom(this.http.get<T>(`${this.baseUrl}${this.controllerName}/${methodName}`).pipe(
        map(data => this.handleSuccess<T>(data)),
        catchError((err) => this.handleError<T>(err))));
      return response;
    } catch (err: any) {
      return new ApiResponse<T>(false, undefined, err.message);
    }
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

  private handleSuccess<T>(data: T): ApiResponse<T> {
    return new ApiResponse<T>(true, data, "", 200);
  }

  private handleError<T>(error: HttpErrorResponse): Observable<ApiResponse<T>> {
    return of(new ApiResponse<T>(false, undefined, error.message, error.status));
  }
}
