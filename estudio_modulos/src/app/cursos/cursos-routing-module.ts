import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursos } from './pages/lista-cursos/lista-cursos';

const routes: Routes = [
  {
    path: '',
    component: ListaCursos
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
