import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class GaleriaComponent {

  imagenes = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200',
    'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200',
    'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
    'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=1200',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200'
  ];

  isModalOpen = false;
  currentImageIndex = 0;

  openGallery(index: number) {
    this.currentImageIndex = index;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.currentImageIndex < this.imagenes.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.imagenes.length - 1;
    }
  }

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    if (this.isModalOpen) {
      this.closeGallery();
    }
  }
}
