import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ViajesService } from '../../services/viajes.service';
import { Viaje } from '../../interfaces/viaje';

@Component({
  selector: 'app-viajes',
  standalone: false,
  templateUrl: './viajes.html',
  styleUrl: './viajes.scss',
})
export class Viajes implements OnInit{

  private viajesService = inject(ViajesService);
  private cdr = inject(ChangeDetectorRef);

  listaViajes: Viaje[] = [];
  mensajeError = '';
  cargando = true;
  

  // Comprueba si la fecha del viaje es anterior a hoy
  viajePasado(fechaViaje: string): boolean {
    const hoy = new Date();
    const fecha = new Date(fechaViaje);
    return fecha < hoy;
  }
  cancelar(id: number) {
    if (confirm('¿Estás seguro de que quieres cancelar este viaje?')) {
      this.viajesService.cancelarViaje(id).subscribe({
        next: () => {
          this.listaViajes = this.listaViajes.filter(viaje => viaje.id !== id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.mensajeError = 'No se pudo cancelar el viaje.';
          console.error(err);
          this.cdr.detectChanges();
        }
      });
    }
  }
  ngOnInit(): void {
    this.viajesService.obtenerViajes().subscribe({
      next: (viajes) => {
        this.listaViajes = viajes;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
       this.cargando = false;
        this.mensajeError = 'No se han podido cargar tus viajes.';
        console.error(err);
        this.cdr.detectChanges();
      }
    })
  }

}
