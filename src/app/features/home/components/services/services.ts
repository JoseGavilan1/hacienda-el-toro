import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  servicios = [
    {
      titulo: 'Banquetería',
      descripcion: 'Alta gastronomía diseñada a medida. Sabores únicos para deleitar a tus invitados en cada momento de la celebración.',
      imagen: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
      ruta: '/banqueteria'
    },
    {
      titulo: 'Ambientación',
      descripcion: 'Diseño floral y decoración de espacios. Transformamos la hacienda para reflejar la personalidad de tu evento.',
      imagen: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
      ruta: '/ambientacion'
    },
    {
      titulo: 'Producción',
      descripcion: 'Iluminación, sonido profesional y coordinación técnica para que disfrutes sin ningún tipo de preocupación.',
      imagen: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
      ruta: '/produccion'
    }
  ];
}
