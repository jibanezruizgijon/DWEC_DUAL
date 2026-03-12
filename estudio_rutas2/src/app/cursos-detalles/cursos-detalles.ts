import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cursos-detalles',
  standalone: false,
  templateUrl: './cursos-detalles.html',
  styleUrl: './cursos-detalles.css',
})
export class CursosDetalles {

  curso: string = '';
  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.curso = params['curso'];
    });
  }
}
