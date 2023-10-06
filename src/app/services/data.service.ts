import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('assets/data/customers-large.json')
  }
  getDataPie(): Observable<any> {
    return this.http.get<any>('assets/data/customers-small.json')
  }
}
