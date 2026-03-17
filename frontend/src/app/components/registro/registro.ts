import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.html', 
  styleUrls: ['./registro.scss'],
  standalone: false
})
export class Registro {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  private cdr = inject(ChangeDetectorRef);

  mensajeDeError = '';
  cargando = false;
  // formulario reactivo
  formRegistro = this.fb.group({
    'name': ["", Validators.required],
    'email': ["", [Validators.required, Validators.email]],
    'password': ["", [Validators.required, Validators.minLength(6)]]
  });
  // Getters para acceder a cada campo desde el HTML
  get name() { return this.formRegistro.get('name') as FormControl; }
  get email() { return this.formRegistro.get('email') as FormControl; }
  get password() { return this.formRegistro.get('password') as FormControl; }


  registro() {
    // Si el formulario es inválido o está cargando no hace nada
    if (this.formRegistro.invalid || this.cargando) {
      return;
    }

    this.cargando = true;
    this.mensajeDeError = '';

    this.authService.registro(this.formRegistro.value).subscribe({
      next: () => {
        this.authService.login({
          email: this.formRegistro.value.email,
          password: this.formRegistro.value.password
        }).subscribe({
          next: () => {
            this.cargando = false;
            this.router.navigate(['/viajes']); 
          },
          error: (errLogin) => {
            // En caso de un error inesperado en el autologin, se redirige al login
            this.cargando = false;
            console.error('Error en el login automático:', errLogin);
            this.router.navigate(['/login']);
          }
        });
      },
      error: (error) => {
        this.cargando = false;

        if (error.status === 422 && error.error.errors) {
          const errores = error.error.errors;
          if (errores.email) {
            this.mensajeDeError = 'Ya existe una cuenta con este email.';
          } else {
            this.mensajeDeError = 'Revisa los datos introducidos.';
          }
        } else {
          this.mensajeDeError = 'Error de conexión con el servidor.';
        }
        // fuerza la revisión de la vista
        this.cdr.detectChanges(); 
      }
    });
  }
}