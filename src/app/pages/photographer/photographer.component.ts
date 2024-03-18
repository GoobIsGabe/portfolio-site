import { Component, HostListener } from '@angular/core';
// I may needs this for videos for spreadsheets or widgets
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Photo } from 'src/app/models/photos';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss']
})
export class PhotographerComponent {

  modalImageUrl: string | undefined;
  modalCaption: string | undefined;
  modalOpen: boolean = false;
  currentIndex: number = 0;

  Pictures: Photo[] =[
    //         Collections        MediaURL
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/1.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/2.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/3.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/4.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/5.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/7.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/8.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/9.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/10.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/11.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/12.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/13.webp"),
    new Photo(["Park", "Nature"],"/assets/images/Photography/Park/14.webp"),    
  ]

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
      this.currentIndex--; // Decrement the current index
      this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL; // Update modal image URL
    }
    else{
      this.currentIndex=this.Pictures.length - 1;
      this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL;
    }
  }

  nextImage(): void {
    if (this.currentIndex < this.Pictures.length - 1) {
      this.currentIndex++; // Increment the current index
      this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL; // Update modal image URL
    }
    else{
      this.currentIndex=0;
      this.modalImageUrl = this.Pictures[this.currentIndex].mediaURL;
    }
  }

  
  //HOTKEYS

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.modalOpen) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.arrowleft')
  handleArrowLeft(): void {
    this.prevImage();
  }

  @HostListener('document:keydown.arrowright')
  handleArrowRight(): void {
    this.nextImage();
  }

}
