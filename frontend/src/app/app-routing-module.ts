import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { Viajes } from './components/viajes/viajes';
const routes: Routes = [
  {path: 'login', component: Login},
  {path: 'register', component: Registro},
  {path: '', component: Login},
  {path: 'viajes', component: Viajes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
