import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisonService {

  constructor(private http: HttpClient) { }


  getdata(key:string): Observable<any> {
    return this.http.get<any>(`https://provinces.open-api.vn/api/d/search/?q=${key}`);
  }
}
