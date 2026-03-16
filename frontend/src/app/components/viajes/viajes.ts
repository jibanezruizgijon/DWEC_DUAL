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
