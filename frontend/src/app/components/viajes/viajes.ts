import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ViajesService } from '../../services/viajes.service';
import { Viaje } from '../../interfaces/viaje';
@Component({
  selector: 'app-viajes',
  standalone: false,
  templateUrl: './viajes.html',
  styleUrl: './viajes.scss',
})
export class Viajes implements OnInit {

  private viajesService = inject(ViajesService);
  private cdr = inject(ChangeDetectorRef);

  listaViajes: Viaje[] = [];
  mensajeError = '';
  cargando = true;
  viajeSeleccionado: Viaje | null = null;
  viajeParaCancelar: Viaje | null = null;

  // Comprueba si la fecha del viaje es anterior a hoy
  viajePasado(fechaViaje: string): boolean {
    const hoy = new Date();
    const fecha = new Date(fechaViaje);
    return fecha < hoy;
  }
  prepararCancelacion(viaje: Viaje) {
    this.viajeParaCancelar = viaje;
    const modalElement = document.getElementById('cancelarModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  confirmarCancelacion() {
    if (!this.viajeParaCancelar) return;

    this.viajesService.cancelarViaje(this.viajeParaCancelar.id).subscribe({
      next: () => {
        // Filtramos la lista para quitar el viaje borrado
        this.listaViajes = this.listaViajes.filter(v => v.id !== this.viajeParaCancelar?.id);

        // Cerramos el modal manualmente
        const modalElement = document.getElementById('cancelarModal');
        const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
        if (modal) modal.hide();

        this.viajeParaCancelar = null;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.mensajeError = 'No se pudo cancelar el viaje.';
        console.error(error);
        this.cdr.detectChanges();
      }
    });
  }

  abrirDetalles(viaje: Viaje) {
    this.viajeSeleccionado = viaje;
    const modalElement = document.getElementById('detallesModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  ngOnInit(): void {
    this.viajesService.obtenerViajes().subscribe({
      next: (viajes) => {
        this.listaViajes = viajes;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.cargando = false;
        this.mensajeError = 'No se han podido cargar tus viajes.';
        console.error(error);
        this.cdr.detectChanges();
      }
    })
  }

}