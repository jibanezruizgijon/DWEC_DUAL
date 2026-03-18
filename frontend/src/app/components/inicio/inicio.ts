import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
  imagenesCarrusel = [
    { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', titulo: 'Explora el Mundo', desc: 'Los mejores destinos a un click.' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', titulo: 'Playas Paradisiacas', desc: 'Relájate en las mejores costas.' }
  ];

  // Datos para el Slider de Parques
  parques = [
    { nombre: 'Disneyland Paris', imagen: 'assets/parques/disney.jpg' },
    { nombre: 'PortAventura', imagen: 'assets/parques/port.jpg' },
    { nombre: 'Warner Park', imagen: 'assets/parques/warner.jpg' }
  ];

  // Viajes destacados
  destacados = [
    { ciudad: 'Nueva York', precio: '850€', visitas: '+2000' },
    { ciudad: 'Roma', precio: '120€', visitas: '+5000' }
  ];
}
