import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing-module';
import { ListaCursos } from './pages/lista-cursos/lista-cursos';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [ListaCursos],
  imports: [CommonModule, CursosRoutingModule, SharedModule],
})
export class CursosModule {}
