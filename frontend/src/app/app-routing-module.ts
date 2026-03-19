import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { Viajes } from './components/viajes/viajes';
import { Tiempo } from './components/tiempo/tiempo';
import { Inicio } from './components/inicio/inicio';
import { SobreNosotros } from './components/sobre-nosotros/sobre-nosotros';
const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Registro },
  { path: 'inicio', component: Inicio },
  { path: 'viajes', component: Viajes },
  { path: 'tiempo', component: Tiempo },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'sobre-nosotros', component: SobreNosotros }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
