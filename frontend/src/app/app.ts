import { Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
  private router = inject(Router);

  BotonScroll = false;
  mostrarFooter = false;
constructor() {
    // Escucha los eventos de navegación
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Si la URL contiene 'login' o 'register', oculta el footer
        const url = event.urlAfterRedirects;
        this.mostrarFooter = !(url.includes('/login') || url.includes('/register'));
      }
    });
  }

  // Escucha el scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Muestra el botón si baja más de 300px
    this.BotonScroll = window.scrollY > 300;
  }


  subirArriba() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

}
