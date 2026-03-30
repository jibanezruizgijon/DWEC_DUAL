import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiempoService {
  private http = inject(HttpClient);

  private apiKey = '29e59156c34a232cfcd1454009cd661c';
  private urlTiempo = 'https://api.openweathermap.org/data/2.5/weather';
  private urlPrevision = 'https://api.openweathermap.org/data/2.5/forecast';
 
  obtenerTiempo(ciudad: string): Observable<any> {
    return this.http.get(`${this.urlTiempo}?q=${ciudad}&units=metric&appid=${this.apiKey}&lang=es`);
  }

  obtenerPrevision(ciudad: string): Observable<any> {
    return this.http.get(`${this.urlPrevision}?q=${ciudad}&units=metric&appid=${this.apiKey}&lang=es`);
  }
}
