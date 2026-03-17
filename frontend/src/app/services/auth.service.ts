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
  return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
    tap((res: any) => {
      // Cambia localStorage por sessionStorage
      sessionStorage.setItem('auth_token', res.token);
    })
  );
}

estaLogueado(): boolean {
  return !!sessionStorage.getItem('auth_token');
}

logout() {
  sessionStorage.removeItem('auth_token');
}
  registro(datos: any) {
    return this.http.post(`${this.apiUrl}/register`, datos);
  }
  
}
