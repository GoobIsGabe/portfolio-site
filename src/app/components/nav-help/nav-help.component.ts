import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-help',
  templateUrl: './nav-help.component.html',
  styleUrls: ['./nav-help.component.scss'],
})
export class NavHelpComponent implements OnInit {
  showComponent: boolean = false; //Change to false when done designing

  ngOnInit() {
    setTimeout(() => {
      this.showComponent = true;
    }, 5000);
  }

  closeModal() {
    this.showComponent = false;
  }
}
