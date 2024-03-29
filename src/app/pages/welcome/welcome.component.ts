import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  constructor(private router: Router) {
    // this.router.navigate(['/development'], { replaceUrl: true });
  }
  isPopoverVisible: boolean = false;

  showPopover() {
    this.isPopoverVisible = true;
  }

  hidePopover() {
    this.isPopoverVisible = false;
  }
  
}
