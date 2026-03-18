import { Component, inject, OnInit } from '@angular/core';
import { TiempoService } from '../../services/tiempo';

@Component({
  selector: 'app-tiempo',
  standalone: false,
  templateUrl: './tiempo.html',
  styleUrl: './tiempo.scss',
})
export class Tiempo implements OnInit {
private tiempoService = inject(TiempoService);

 ciudadesPrincipales = ['Madrid', 'Londres', 'Roma', 'París'];
  climaCiudades: any[] = [];

  // Variables para el buscador
  ciudadBuscada = '';
  resultadoBusqueda: any = null;
  mensajeError = '';
  buscando = false;

  ngOnInit() {
    this.cargarCiudades();
  }
  
  cargarCiudades() {
    this.ciudadesPrincipales.forEach(ciudad => {
      this.tiempoService.obtenerTiempo(ciudad).subscribe({
        next: (datos) => {
          this.climaCiudades.push(datos);
        },
        error: (error) => console.error('Error al cargar el tiempo', error)
      });
    });
  }
buscarTiempo() {
    if (!this.ciudadBuscada.trim()) return; 

    this.buscando = true;
    this.mensajeError = '';
    this.resultadoBusqueda = null;

    this.tiempoService.obtenerTiempo(this.ciudadBuscada).subscribe({
      next: (datos) => {
        this.resultadoBusqueda = datos;
        this.buscando = false;
      },
      error: (error) => {
        this.buscando = false;
        if (error.status === 404) {
          this.mensajeError = 'No se ha encontrado ninguna ciudad con ese nombre.';
        } else {
          this.mensajeError = 'Error al buscar el tiempo. Inténtalo de nuevo.';
        }
      }
    });
  }

  // Función para los colores dinámicos
  obtenerColorTemperatura(temp: number): string {
    if (temp < 15) return 'bg-frio';
    if (temp >= 15 && temp < 25) return 'bg-templado';
    return 'bg-calor';
  }


}
