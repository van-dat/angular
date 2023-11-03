import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }
  api = 'https://localhost:7038/api/PositionTypes'


  getPosition () :Observable<any> {
    return this.http.get<any>(this.api);
  }
}
