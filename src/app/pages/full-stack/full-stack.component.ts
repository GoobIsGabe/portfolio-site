import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrls: ['./full-stack.component.scss']
})
export class FullStackComponent {

  showWorksContent = false;
  @ViewChild('worksContent', {static: false}) worksContent!: ElementRef;
  
  toggleWorksContent() {
    this.showWorksContent = !this.showWorksContent;

  }
  
}
