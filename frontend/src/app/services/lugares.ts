import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugar } from '../interfaces/lugar';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Lugares {
  private http = inject(HttpClient)
    private apiUrl = `${environment.apiUrl}/lugares`;

  obtenerLugares(pagina: number = 1, busqueda: string = ''): Observable<any> {
    let parametros = new HttpParams().set('page', pagina);

    if (busqueda) {
      parametros = parametros.set('buscar', busqueda);
    }

    return this.http.get<any>(this.apiUrl, { params: parametros });
  }

  obtenerDatosInicio(): Observable<{ parques: Lugar[], destacados: Lugar[] }> {
    return this.http.get<{ parques: Lugar[], destacados: Lugar[] }>(`http://localhost:8000/api/inicio-datos`);
  }

}
