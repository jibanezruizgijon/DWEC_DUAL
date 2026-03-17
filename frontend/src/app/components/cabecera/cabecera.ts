import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Tiempo } from '../../services/tiempo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.scss'],
  standalone: false
})
export class Cabecera {

  public authService = inject(AuthService);
  private tiempoService = inject(Tiempo);
  private router = inject(Router);
  public datosTiempo: any = null;

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  cargarClima() {
    // Puedes poner tu ciudad por defecto o detectarla
    this.tiempoService.obtenerTiempo('Madrid').subscribe({
      next: (res) => {
        this.datosTiempo = res;
      },
      error: (error) => console.error('Error al cargar el tiempo', error)
    });
  }
}