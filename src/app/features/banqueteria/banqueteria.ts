import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banqueteria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banqueteria.html',
  styleUrl: './banqueteria.css'
})
export class BanqueteriaComponent {
  // Imágenes de alta calidad de comida/banquetes para reemplazar las circulares
  imagenes = [
    'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800',
    'https://images.unsplash.com/photo-1655196753068-154b2a8ed291?q=80&w=800',
    'https://images.unsplash.com/photo-1414235077428-338988a2e8c0?q=80&w=800',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800'
  ];
}
