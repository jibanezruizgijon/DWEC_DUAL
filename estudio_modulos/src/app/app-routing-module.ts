import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome-module').then(m => m.WelcomeModule)
  }, {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos-module').then(m => m.CursosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
