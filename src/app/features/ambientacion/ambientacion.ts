import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ambientacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ambientacion.html',
  styleUrl: './ambientacion.css'
})
export class AmbientacionComponent {
  imagenes = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800',
    'https://images.unsplash.com/photo-1505902736242-eb146bc0241c?q=80&w=800'
  ];
}
