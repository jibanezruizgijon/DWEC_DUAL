import { Component } from '@angular/core';
import { MensajesService } from '../mensajes.service';

@Component({
  selector: 'app-add-mensaje',
  standalone: false,
  templateUrl: './add-mensaje.component.html',
  styleUrl: './add-mensaje.component.css'
})
export class AddMensajeComponent {

  constructor(public mensajesService: MensajesService) { }
  
  mensaje: string = '';

  addMensaje(){
    this.mensajesService.add(this.mensaje);  
    this.mensaje = '';
  }
}
