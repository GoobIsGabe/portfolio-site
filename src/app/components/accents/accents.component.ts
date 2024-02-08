import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accents',
  templateUrl: './accents.component.html',
  styleUrls: ['./accents.component.scss']
})
export class AccentsComponent {
  constructor(private router: Router) {}

  isRouteActive(route: string): boolean {
      return this.router.url === route;
  }
}
