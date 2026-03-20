import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Busca el token que se guarda al hacer login
    // En el método intercept
    const token = sessionStorage.getItem('auth_token'); //

    // solo lo pega si la petición no es de la API de clima
    if (token && !request.url.includes('openweathermap')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Deja que la petición continúe su viaje hacia Laravel
    return next.handle(request);
  }
}