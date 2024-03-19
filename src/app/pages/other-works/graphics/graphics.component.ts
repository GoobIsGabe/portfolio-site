import { Component } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent {
  modalImageUrl: string | undefined;
  modalOpen: boolean = false;
  currentIndex: number = 0;
  isCollapsibleOpen: boolean = false;
  
  toggleCollapsible(): void {
    this.isCollapsibleOpen = !this.isCollapsibleOpen;
    const arrowIcon = document.querySelector('.arrow2');
    if (this.isCollapsibleOpen) {
      arrowIcon?.classList.add('opened');
      this.closeModal();
    } else {
      arrowIcon?.classList.remove('opened');
    }
  }

  openModal(imageUrl: string, index:number): void {
    this.modalImageUrl = imageUrl;
    this.modalOpen = true;
    this.currentIndex = index;
    console.log(imageUrl);
    
  }

  closeModal(): void {
    this.modalOpen = false;
  }
  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      // this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL; 
    }
    else{
      // this.currentIndex=this.Pictures.length - 1;
      // this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL;
    }
  }

  nextImage(): void {
    // if (this.currentIndex < this.Pictures.length - 1) {
      this.currentIndex++; // Increment the current index
      // this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL; 
    }
    // else{
      // this.currentIndex=0;
      // this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL;
    }
  // }
// }