import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajes: string[] = [];

  add(mensaje: string) {
    this.mensajes.push(mensaje);
  }

}
