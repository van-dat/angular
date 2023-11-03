import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   api = 'https://localhost:7038/api/Users';

  constructor(private http: HttpClient) { }

  getUser() :Observable<any> {
    return this.http.get<any>(`${this.api}/getall`)
  }
  // 
  getUserPage(page:number) :Observable<any> {
    return this.http.get<any>(`${this.api}/getall?page=${page}`)
  }
  getUserKey  (key:string) :Observable<any> {
    return this.http.get<any>(`${this.api}/getname${key}`)
  }
  getOneUser(id:number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }
  PostUser(userData: any): Observable<any> {
    console.log(userData)
    return this.http.post<any>(this.api, userData);
  }
  updateUser(id:number, data:any) : Observable<any> {
    return this.http.put<any>(`${this.api}/${id}`, data) 
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/login`, data);
  }
  deletedUser(id:number):Observable<any> {
    console.log(id)
    return this.http.delete<any>(`${this.api}/${id}`)
  }
  checkLogin(): any {
    let dataUser = sessionStorage.getItem('login');
    if (dataUser) {
      return JSON.parse(dataUser);
    } else {
      return false;
    }
  }
  formatDate(data: string) {
    return (data?.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3'));
  }
   formatDateString(inputDate:string) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
    return formattedDate;
  }
}

