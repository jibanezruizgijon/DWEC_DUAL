import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tiempo {
  private http = inject(HttpClient);
  
  // Sustituye por tu API Key real de OpenWeatherMap
  private apiKey = '29e59156c34a232cfcd1454009cd661c'; 
  private urlBase = 'https://api.openweathermap.org/data/3.0/weather';

  // Obtenemos el tiempo de una ciudad (ej. Madrid) en sistema métrico (Celsius)
  obtenerTiempo(ciudad: string): Observable<any> {
    return this.http.get(`${this.urlBase}?q=${ciudad}&units=metric&appid=${this.apiKey}&lang=es`);
  }
}
