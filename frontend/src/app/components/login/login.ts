import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login', 
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: false
})
export class Login {
  
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  mensajeDeError = '';

  // Creamos el formulario reactivo
  formLogin = this.fb.group({
    'email': ["", [Validators.required, Validators.email]],
    'password': ["", Validators.required]
  });

  get email() { return this.formLogin.get('email') as FormControl; }
  get password() { return this.formLogin.get('password') as FormControl; }

  iniciarSesion() {
    if (this.formLogin.invalid) {
      return;
    }

    this.authService.login(this.formLogin.value).subscribe({
      next: () => {
        // Redirección directa a los viajes
        this.router.navigate(['/viajes']); 
      },
      error: (error) => {
        // Capturamos los errores
        if (error.status === 401) {
          this.mensajeDeError = 'Correo o contraseña incorrectos.';
        } else if (error.status === 429) {
          this.mensajeDeError = 'Demasiados intentos. Espera un minuto.';
        } else {
          this.mensajeDeError = 'Error al intentar iniciar sesión.';
        }
      }
    });
  }
}