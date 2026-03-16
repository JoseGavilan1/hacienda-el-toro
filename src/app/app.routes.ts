import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { BanqueteriaComponent } from './features/banqueteria/banqueteria';
import { ServicesComponent } from './features/home/components/services/services';
import { AmbientacionComponent } from './features/ambientacion/ambientacion';
import { ProduccionComponent } from './features/produccion/produccion';
import { InfraestructuraComponent } from './features/infraestructura/infraestructura';
import { GaleriaComponent } from './features/galeria/galeria';
import { ContactoComponent } from './features/contacto/contacto';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'banqueteria', component: BanqueteriaComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'ambientacion', component: AmbientacionComponent },
  { path: 'produccion', component: ProduccionComponent},
  { path: 'instalaciones', component: InfraestructuraComponent},
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
