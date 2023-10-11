import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';



@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent implements OnInit {
  static readonly ROUTE_BREADCRUMB = 'breadcrumb';
  readonly home = {icon: 'pi pi-home', routerLink: '/'};
  menuItems: MenuItem[]|undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute.root));
    
  }
  createBreadcrumbs(route: ActivatedRoute, url: string = '#', breadcrumbs: MenuItem[] = []): any {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[
        MenuBarComponent.ROUTE_BREADCRUMB
      ];
      if (label) {
        breadcrumbs.push({ label, routerLink: url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
    
  }
}
