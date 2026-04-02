import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.html',
  styleUrls: ['./cabecera.scss'],
  standalone: false
})
export class Cabecera {

  public authService = inject(AuthService);
  private router = inject(Router);
  
  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}