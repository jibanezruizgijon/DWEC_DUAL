import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: false,
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.scss',
})
export class SobreNosotros {
  equipo = [
    { nombre: 'Laura Martínez', puesto: 'Directora de Viajes', imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
    { nombre: 'Carlos Ruiz', puesto: 'Especialista en Destinos', imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80' },
    { nombre: 'Ana Gómez', puesto: 'Atención al Cliente', imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' }
  ];
}
