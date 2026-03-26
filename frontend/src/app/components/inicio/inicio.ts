import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Lugar } from '../../interfaces/lugar';
import { Lugares } from '../../services/lugares';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit {

  private lugaresService = inject(Lugares);
  private cdr = inject(ChangeDetectorRef);

  // Datos para el carrusel principal (estos se pueden quedar así por ahora)
  imagenesCarrusel = [
    { url: 'img/carrusel/carrusel1.jpg' },
    { url: 'img/carrusel/carrusel2.jpg' },
    { url: 'img/carrusel/carrusel3.jpg' }
  ];

  parques: Lugar[] = [];
  // Usamos el tipo Lugar y le añadimos dinámicamente la propiedad 'visitas'
  destacados: Lugar[] = [];

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.lugaresService.obtenerDatosInicio().subscribe({
      next: (respuesta) => {
        this.parques = respuesta.parques;
        this.destacados = respuesta.destacados;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar datos de inicio:', error);
        this.cdr.detectChanges();
      }
    });
  }
}