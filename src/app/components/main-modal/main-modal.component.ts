import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent implements OnInit {
  showTellMeMoreButton: boolean = true;

  constructor(private router: Router) {}
  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Check if the current route is '/' or '/home', hide the button if not
        this.showTellMeMoreButton =
          this.router.url === '/' || this.router.url.includes('/home');
      });
  }
}
