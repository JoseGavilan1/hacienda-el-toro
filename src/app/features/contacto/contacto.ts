import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {

  onSubmit(event: Event) {
    event.preventDefault(); 
    alert('Mensaje de prueba enviado. ¡En el futuro esto llegará al correo de la Hacienda!');
  }
}
