import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    // Llama a Laravel y si va bien, guarda el token en el navegador
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        localStorage.setItem('auth_token', res.token);
      })
    );
  }

  registro(datos: any) {
    return this.http.post(`${this.apiUrl}/register`, datos);
  }
  logout() {
    // Borra el token al cerrar sesión
    localStorage.removeItem('auth_token');
  }
}
