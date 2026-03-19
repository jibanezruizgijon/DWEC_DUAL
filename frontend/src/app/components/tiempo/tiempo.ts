import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TiempoService } from '../../services/tiempo';

@Component({
  selector: 'app-tiempo',
  standalone: false,
  templateUrl: './tiempo.html',
  styleUrl: './tiempo.scss',
})
export class Tiempo implements OnInit {
private tiempoService = inject(TiempoService);
private cdr = inject(ChangeDetectorRef);

 ciudadesPrincipales = ['Madrid', 'Londres', 'Roma', 'París'];
  climaCiudades: any[] = [];

  // Variables para el buscador
  ciudadBuscada = '';
  resultadoBusqueda: any = null;
  mensajeError = '';
  buscando = false;

  datosGrafico: any = null;
  opcionesGrafico: any = null;

  ngOnInit() {
    this.cargarCiudades();
  }
  
  cargarCiudades() {
    this.ciudadesPrincipales.forEach(ciudad => {
      this.tiempoService.obtenerTiempo(ciudad).subscribe({
        next: (datos) => {
          this.climaCiudades.push(datos);
          this.cdr.detectChanges();
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
    this.datosGrafico = null; 

    this.tiempoService.obtenerTiempo(this.ciudadBuscada).subscribe({
      next: (datos) => {
        this.resultadoBusqueda = datos;
        
        // Si encuentra la ciudad, pide también los datos del gráfico
        this.cargarPrevision(); 
      },
      error: (error) => {
        this.buscando = false;
        this.cdr.detectChanges();
        if (error.status === 404) {
          this.mensajeError = 'No se ha encontrado ninguna ciudad con ese nombre.';
        } else {
          this.mensajeError = 'Error al buscar el tiempo. Inténtalo de nuevo.';
        }
      }
    });
  }
 // Función para preparar los datos del gráfico
  cargarPrevision() {
    this.tiempoService.obtenerPrevision(this.ciudadBuscada).subscribe({
      next: (datosPrevision) => {
        // Filtra para coger solo la temperatura de las 12:00 de cada día.
        const diasMediodia = datosPrevision.list.filter((item: any) => item.dt_txt.includes('12:00:00'));

        // Extrae las fechas y las temperaturas de ese filtro
        const etiquetas = diasMediodia.map((item: any) => {
          const fecha = new Date(item.dt_txt);
          return fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        });
        
        const temperaturas = diasMediodia.map((item: any) => item.main.temp);

        // Configuramos los datos exactos que necesita Chart.js
        this.datosGrafico = {
          labels: etiquetas,
          datasets: [
            { 
              data: temperaturas, 
              label: 'Temperatura a las 12:00 (°C)', 
              tension: 0.4, 
              borderColor: '#0d6efd', 
              backgroundColor: 'rgba(13, 110, 253, 0.2)', 
              fill: true,
              pointBackgroundColor: '#0d6efd',
              pointRadius: 5
            }
          ]
        };

        this.buscando = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar la previsión', error);
        this.buscando = false;
        this.cdr.detectChanges();
      }
    }); 
  }


  // Función para los colores dinámicos
  obtenerColorTemperatura(temp: number): string {
    if  (temp < 5) return 'bg-congelado';
    if  (temp >= 5 && temp < 15) return 'bg-frio';
    if (temp >= 15 && temp < 25) return 'bg-templado';
    return 'bg-calor';
  }


}
