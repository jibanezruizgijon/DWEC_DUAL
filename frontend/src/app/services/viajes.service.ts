import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from '../interfaces/viaje';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private apiUrl = `${environment.apiUrl}/viajes`;

  constructor(private http: HttpClient) { }

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
