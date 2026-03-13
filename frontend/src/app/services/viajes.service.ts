import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViajesService {
private apiUrl = 'http://localhost:8000/api/viajes';
  constructor(private http: HttpClient ) { }

  getViajes(){
    return this.http.get(this.apiUrl);
  }
}
