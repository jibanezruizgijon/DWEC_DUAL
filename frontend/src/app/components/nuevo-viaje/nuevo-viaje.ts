import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesService } from '../../services/viajes.service';
import { Lugares } from '../../services/lugares';
declare var bootstrap: any;
@Component({
  selector: 'app-nuevo-viaje',
  standalone: false,
  templateUrl: './nuevo-viaje.html',
  styleUrl: './nuevo-viaje.scss',
})
export class NuevoViaje implements OnInit {
  private lugaresService = inject(Lugares);
  private viajesService = inject(ViajesService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  lugares: any[] = [];
  cargando = false;

  // Variables para paginación y búsqueda
  Busqueda = '';
  paginaActual = 1;
  ultimaPagina = 1;

  // Variables para el Modal
  lugarSeleccionado: any = null;
  fechaViaje = '';
  instanciaModal: any;

  ngOnInit() {
    this.cargarLugares();
  }

  cargarLugares(pagina: number = 1) {
    this.cargando = true;
    this.lugaresService.obtenerLugares(pagina, this.Busqueda).subscribe({
      next: (respuesta) => {
        this.lugares = respuesta.data || respuesta || []; 
        this.paginaActual = respuesta.current_page || 1;
        this.ultimaPagina = respuesta.last_page || 1;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar lugares:', error);
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  buscar() {
    this.cargarLugares(1);
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.ultimaPagina) {
      this.cargarLugares(pagina);
    }
  }

  confirmarViaje() {
    if (!this.fechaViaje || !this.lugarSeleccionado) return;

    const datosViaje = {
      lugar_id: this.lugarSeleccionado.id,
      fecha_viaje: this.fechaViaje
    };

    this.viajesService.crearViaje(datosViaje).subscribe({
      next: () => {
        // Ocultamos el modal y navegamos a la lista de viajes
        this.instanciaModal.hide();
        this.router.navigate(['/viajes']);
      },
      error: (err) => console.error('Error al guardar el viaje', err)
    });
  }

  abrirModal(lugar: any) {
    this.lugarSeleccionado = lugar;
    this.fechaViaje = '';

    const modal = document.getElementById('modalNuevoViaje');
    if (modal) {
      this.instanciaModal = new bootstrap.Modal(modal);
      this.instanciaModal.show();
    }
  }

}
