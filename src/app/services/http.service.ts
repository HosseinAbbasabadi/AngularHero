import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable()
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      "Content-Type": "application/json; charset=utf-8",
      "Accept": "application/json"
    }
    return new HttpHeaders(headersConfig);
  }

  getAll<T>(path: string, params: URLSearchParams = new URLSearchParams()) {
    return this.http.get<T>(`${environment.api_url}${path}`, { headers: this.setHeaders() });
  }

  get<T>(path: string, id: number, params: URLSearchParams = new URLSearchParams()) {
    return this.http.get<T>(`${environment.api_url}${path}/${id}`, { headers: this.setHeaders() });
  }

  put(path: string, body: Object = {}) {
    return this.http.put<any>(`${environment.api_url}${path}`,body,{ headers: this.setHeaders() });
  }

  post<T>(path: string, body: Object = {}) {
    return this.http.post<T>(`${environment.api_url}${path}`,body,{ headers: this.setHeaders() });
  }

  delete(path): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`,{ headers: this.setHeaders() });
  }
}
