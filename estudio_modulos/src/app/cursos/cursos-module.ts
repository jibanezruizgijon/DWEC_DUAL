import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing-module';
import { ListaCursos } from './lista-cursos/lista-cursos';

@NgModule({
  declarations: [ListaCursos],
  imports: [CommonModule, CursosRoutingModule],
})
export class CursosModule {}
