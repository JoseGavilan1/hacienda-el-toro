import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produccion.html',
  styleUrl: './produccion.css'
})
export class ProduccionComponent {
  imagenes = [
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800', // Pista de baile
    'https://images.unsplash.com/photo-1533174000255-a63b8f10e4cd?q=80&w=800', // Luces y fiesta
    'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800', // DJ
    'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800'  // Evento corporativo/iluminación
  ];
}
