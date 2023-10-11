import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor() { }
  private breadcrumbSubject = new BehaviorSubject<string>('Home');
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  updateBreadcrumb(label: string) {
    this.breadcrumbSubject.next(label);
  }
}
