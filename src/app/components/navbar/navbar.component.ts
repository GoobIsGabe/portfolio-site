// navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    
  ]
})
export class NavbarComponent {
  isSmallScreen: boolean = window.innerWidth <= 500;
  navState: string = 'out'; // 'in' or 'out'

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSmallScreen = window.innerWidth <= 500;
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleNav(): void {
    this.navState = this.navState === 'in' ? 'out' : 'in';
  }
  
}
