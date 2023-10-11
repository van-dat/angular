import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   api:any = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  getUser() :Observable<any> {
    return this.http.get<any>(`${this.api}/user`)
  }
}
