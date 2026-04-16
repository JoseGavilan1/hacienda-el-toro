import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent { }
