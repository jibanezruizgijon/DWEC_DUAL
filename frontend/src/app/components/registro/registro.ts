import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {
  usuario: Usuario = {
    name: '',
    email: '',
    password: ''
  };

  mensajeDeError = '';

  constructor(private authService: AuthService, private router: Router) { }

  registro() {
    this.authService.registro(this.usuario).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.mensajeDeError = error.error.message || 'Error al crear la cuenta';
      }
    });
  }
}
