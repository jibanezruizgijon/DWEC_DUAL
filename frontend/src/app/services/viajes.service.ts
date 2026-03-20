import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from '../interfaces/viaje';
@Injectable({
  providedIn: 'root'
})
export class ViajesService {
private apiUrl = 'http://localhost:8000/api/viajes';
  constructor(private http: HttpClient ) { }

  obtenerViajes() {
    return this.http.get<Viaje[]>(this.apiUrl);
  }
  cancelarViaje(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  crearViaje(datosViaje: any) {
    return this.http.post(this.apiUrl, datosViaje);
  }
}
