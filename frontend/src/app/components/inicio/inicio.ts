import { Component } from '@angular/core';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
  
 // Datos para el carrusel
  imagenesCarrusel = [
    { url: 'img/carrusel/carrusel1.jpg'},
    { url: 'img/carrusel/carrusel2.jpg'},
    { url: 'img/carrusel/carrusel3.jpg'}
  ];

  // Datos para las cards de parques
  parques = [
    { nombre: 'Disneyland Paris', imagen: 'img/parques/disney.jpg' },
    { nombre: 'PortAventura', imagen: 'img/parques/portAventura.jpg' },
    { nombre: 'Warner Park', imagen: 'img/parques/parqueWarner.jpeg' }
  ];
  
  // Viajes destacados
  destacados = [
    { ciudad: 'Nueva York', visitas: '+2000', imagen: 'img/lugares/newYork.jpg'},
    { ciudad: 'Roma', visitas: '+5000', imagen: 'img/lugares/roma.jpg' }
  ];
}
