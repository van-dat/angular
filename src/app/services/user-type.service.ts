import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
api = 'https://localhost:7038/api/UserTypes'
  constructor(private http: HttpClient) { }
  getUserType () :Observable<any> {
    return this.http.get<any>(this.api);
  }
}
