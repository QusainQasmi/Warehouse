import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalInjector } from './GlobalInjector';

export class HttpHelper {

  private static get http(): HttpClient {
    return GlobalInjector.get(HttpClient);
  }

  static get<T>(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return this.http.get<T>(url, { params, headers });
  }

  static post<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.post<T>(url, body, { headers });
  }

  static put<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.put<T>(url, body, { headers });
  }

  static delete<T>(url: string, headers?: HttpHeaders) {
    return this.http.delete<T>(url, { headers });
  }
}
