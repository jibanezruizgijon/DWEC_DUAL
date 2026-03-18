import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { Viajes } from './components/viajes/viajes';
import { Tiempo } from './components/tiempo/tiempo';
const routes: Routes = [
  {path: 'login', component: Login},
  {path: 'register', component: Registro},
  {path: '', component: Login},
  {path: 'viajes', component: Viajes},
  {path: 'tiempo', component: Tiempo}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
