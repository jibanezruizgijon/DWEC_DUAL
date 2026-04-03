import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  login(datos: any) {
    return this.http.post(`${this.apiUrl}/login`, datos).pipe(
      tap((res: any) => {
        // Guarda el token en el almacenamiento 
        sessionStorage.setItem('auth_token', res.token);
      })
    );
  }

  estaLogueado(): boolean {
    const token = sessionStorage.getItem('auth_token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('auth_token');
  }
  registro(datos: any) {
    return this.http.post(`${this.apiUrl}/register`, datos);
  }
  obtenerPerfil(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }
  actualizarPerfil(email: string, datos: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/usuarios/actualizar/${email}`, datos);
  }

}
