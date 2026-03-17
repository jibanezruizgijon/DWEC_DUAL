import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');

  mostrarBotonScroll = false;

  // Escucha el scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Muestra el botón si baja más de 300px
    this.mostrarBotonScroll = window.scrollY > 300;
  }


  subirArriba() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

}
