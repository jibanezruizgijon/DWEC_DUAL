import { Component } from '@angular/core';
import { MensajesService } from '../mensajes.service';

@Component({
  selector: 'app-list-mensaje',
  standalone: false,
  templateUrl: './list-mensaje.component.html',
  styleUrl: './list-mensaje.component.css'
})
export class ListMensajeComponent {
   constructor (public mensajesService: MensajesService) { }

   
}
