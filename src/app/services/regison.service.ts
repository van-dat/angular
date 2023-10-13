import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, isEmpty } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisonService {
  api = 'https://provinces.open-api.vn/api'
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`${this.api}/?depth=3`)
  }

  getData(key: any): Observable<any> {
    if (!key) return this.http.get<any>(`${this.api}/p`);
    return this.http.get<any>(`${this.api}/p/search/?q=${key}`);
  }
  getDataXa(key: any): Observable<any> {
    if (!key) return this.http.get<any>(`${this.api}/w`);
    return this.http.get<any>(`${this.api}/w/search/?q=${key}`);
  } getDataQuan(key: any): Observable<any> {
    if (!key) return this.http.get<any>(`${this.api}/d`);
    return this.http.get<any>(`${this.api}/d/search/?q=${key}`);
  }
}
