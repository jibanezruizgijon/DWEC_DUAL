import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  inicio = {
    email: '',
    password: ''
  };

  mensajeError = '';

  constructor(private authService: AuthService, private router: Router) { }

  iniciarSesion() {
    this.authService.login(this.inicio).subscribe({
      next: (respuesta) => {
        // El AuthService ya guarda el token automáticamente gracias al 'tap' que pusimos
        alert('¡Bienvenido!');
        this.router.navigate(['/viajes']); // Después del login, vamos a ver los viajes
      },
      error: (error) => {
        this.mensajeError = 'Email o contraseña incorrectos';
      }
    });
  }
}
