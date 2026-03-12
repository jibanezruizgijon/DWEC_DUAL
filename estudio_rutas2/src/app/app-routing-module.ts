import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { Cursos } from './cursos/cursos';
import { CursosDetalles } from './cursos-detalles/cursos-detalles';
import { ContactInfo } from './contact-info/contact-info';
import { ContactDetails } from './contact-details/contact-details';

const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'contact',
    component: Contact,
    children: [
      { path: '', component: ContactInfo },
      {path: 'details', component: ContactDetails}
    ]
  },
  { path: 'about', component: About },
  { path: 'cursos', component: Cursos },
  { path: 'cursos/:curso', component: CursosDetalles },

  // Ruta por defecto (cuando la URL está vacía, te manda a home)
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Ruta comodín (por si escriben una URL que no existe)
  // { path: '**', component: PageNotFound },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
