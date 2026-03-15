import { Component, inject } from '@angular/core';
import { ViajesService } from '../../services/viajes.service';

@Component({
  selector: 'app-viajes',
  standalone: false,
  templateUrl: './viajes.html',
  styleUrl: './viajes.scss',
})
export class Viajes {

  private viajesService = inject(ViajesService);

  viajes$ = this.viajesService.obtenerViajes();
  

}
