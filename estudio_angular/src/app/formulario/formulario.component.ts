import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  openAlert: boolean = false;

  mostrar_consola(nombre: string) {
    const nombreLimpio = nombre.trim();
    if (nombreLimpio.length > 0) {
      this.openAlert = true;
      console.log(nombreLimpio);
    } else {
      this.openAlert = false;
    }
  }
}
