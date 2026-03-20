import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Lugares {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:8000/api/lugares'
  
  obtenerLugares(pagina: number = 1, busqueda: string = ''): Observable<any> {
    let parametros = new HttpParams().set('page', pagina);

   if (busqueda) {
      parametros = parametros.set('buscar', busqueda);
    }
    
    return this.http.get<any>(this.apiUrl, { params: parametros });
  }


}
