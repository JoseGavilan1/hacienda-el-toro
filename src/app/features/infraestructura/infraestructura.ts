import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infraestructura',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infraestructura.html',
  styleUrl: './infraestructura.css'
})
export class InfraestructuraComponent {

  isModalOpen = false;
  currentGallery: string[] = [];
  currentImageIndex = 0;

  instalaciones = [
    {
      nombre: 'Casona El Toro',
      descripcion: 'Nuestra casona principal cuenta con una arquitectura rústica tradicional, amplios salones, vigas a la vista y todas las comodidades para recibir a sus invitados en un ambiente cálido y elegante.',
      imagen: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000',

      galeria: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200'
      ]
    },
    {
      nombre: 'Piscina y Terrazas',
      descripcion: 'Una hermosa piscina rodeada de naturaleza y terrazas lounge. El lugar perfecto para cócteles al atardecer o para darle un toque fresco y moderno a su celebración.',
      imagen: 'https://images.unsplash.com/photo-1576013551627-11971f64baf1?q=80&w=1000',
      galeria: [
        'https://images.unsplash.com/photo-1576013551627-11971f64baf1?q=80&w=1200',
        'https://images.unsplash.com/photo-1533345458925-e7a93ce18bb6?q=80&w=1200',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200'
      ]
    },
    {
      nombre: 'Cancha de Futbolito',
      descripcion: 'Un espacio recreativo de pasto natural, ideal para eventos de empresas (team building), paseos de curso o simplemente para agregar una zona de juegos y esparcimiento.',
      imagen: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=1000',
      galeria: [
        'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=1200',
        'https://images.unsplash.com/photo-1518605368461-1ee7c68856ae?q=80&w=1200'
      ]
    },
    {
      nombre: 'Áreas Verdes',
      descripcion: 'Extensos jardines y rincones mágicos bajo la sombra de árboles nativos. Un escenario de ensueño para realizar ceremonias civiles, religiosas o sesiones de fotos inolvidables.',
      imagen: 'https://images.unsplash.com/photo-1596431245032-15f18ccb3ae2?q=80&w=1000',
      galeria: [
        'https://images.unsplash.com/photo-1596431245032-15f18ccb3ae2?q=80&w=1200',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200',
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200'
      ]
    }
  ];

  openGallery(galeria: string[]) {
    this.currentGallery = galeria;
    this.currentImageIndex = 0;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.currentImageIndex < this.currentGallery.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.currentGallery.length - 1;
    }
  }

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    if (this.isModalOpen) {
      this.closeGallery();
    }
  }
}
