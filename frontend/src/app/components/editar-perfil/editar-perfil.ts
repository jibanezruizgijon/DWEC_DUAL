import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-editar-perfil',
  standalone: false,
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.scss',
})
export class EditarPerfil implements OnInit {
  
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  mensajeDeError = '';
  mensajeExito = '';
  cargando = true;
  guardando = false;
  emailUsuario = ''; 

  // Formulario Reactivo
  formEditar = this.fb.group({
    'email': [{ value: '', disabled: true }], 
    'name': ["", Validators.required],
    'password': ["", [Validators.minLength(6)]] 
  });

  
  get name() { return this.formEditar.get('name') as FormControl; }
  get password() { return this.formEditar.get('password') as FormControl; }

  ngOnInit() {
  
    this.authService.obtenerPerfil().subscribe({
      next: (usuario) => {
        this.emailUsuario = usuario.email;
        this.formEditar.patchValue({
          email: usuario.email,
          name: usuario.name
        });
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.mensajeDeError = 'No se pudieron cargar los datos del perfil.';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  guardarCambios() {
    if (this.formEditar.invalid || this.guardando) {
      return;
    }

    this.guardando = true;
    this.mensajeDeError = '';
    this.mensajeExito = '';

  
    const datosActualizados: any = {
      name: this.formEditar.get('name')?.value
    };

    const nuevaPassword = this.formEditar.get('password')?.value;
    if (nuevaPassword) {
      datosActualizados.password = nuevaPassword;
    }

    this.authService.actualizarPerfil(this.emailUsuario, datosActualizados).subscribe({
      next: () => {
        this.guardando = false;
        this.mensajeExito = '¡Perfil actualizado con éxito!';
        this.formEditar.get('password')?.setValue('');
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.guardando = false;
        this.mensajeDeError = 'Error al actualizar el perfil.';
        this.cdr.detectChanges();
      }
    });
  }
}